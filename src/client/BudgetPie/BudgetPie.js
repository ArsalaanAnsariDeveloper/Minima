import React, { Component } from 'react';
import * as d3 from 'd3';
import './pieStyling.css';

export default class BudgetPie extends Component {

    constructor(props) {
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }
    componentDidMount() {
        this.createBarChart()
    }
        componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart() {
        const title = this.props.title.replace(/\s+/g, '-').toLowerCase()

        const node = this.node
        const pie = d3.pie().value((d)=>d.value);
        const slices = pie(this.props.data);
        console.log(slices);

        const arc = d3.arc()
        .innerRadius(this.props.innerRadius)
        .outerRadius(this.props.outerRadius);
        
        const color =  d3.scaleOrdinal()
		//this assumes you have 3 groups of data//﻿each of the domains corresponds to a color set
        .domain(["Food", "Investment", "Bonding", "Events", "Unspent"])
        .range(["#5680E9", "#84CEEB", "#5AB9EA", "8860D0", "#C1C8E4"]);
        console.log(color);

        var svg = d3.select(node);
        var g = svg.append('g')
        .attr('id','g-'+ title)
        .attr('transform', 'translate(' 
        + this.props.outerRadius + ', ' 
        + this.props.outerRadius + ')')

        g.selectAll('path.slice')
        .data(slices)
            .enter()
            .append('path')
            .attr('class', 'slice')
            .attr('d', arc)
            .attr('fill', (d) => color(d.data.category))

        // building a legend is as simple as binding
        // more elements to the same data. in this case,
        // <text> tags
        var labelText = d3.select('#g-' + title)
            .selectAll('text')
            .data(slices)
            .enter()
                
        labelText.append('text')
            .attr('x', d => arc.centroid(d)[0])
            .attr('y', d => arc.centroid(d)[1])
            .attr('dy', '-0.2em')
            .attr("text-anchor", "middle")
            .text((d) => d.data.category)

        labelText.append('text')
            .attr('x', d => arc.centroid(d)[0])
            .attr('y', d => arc.centroid(d)[1])
            .attr('dy', '0.9em')
            .attr("text-anchor", "middle")
            .attr("font-weight","bold")
            .text((d) => "$"+d.data.value)
    }
render() {
    return <div className="pie-chart-wrapper">
        <svg
            className = "pie" 
            ref={node => this.node = node}
            width={this.props.outerRadius * 2}
            height={this.props.outerRadius * 2}>
        </svg>
    </div>
}
}