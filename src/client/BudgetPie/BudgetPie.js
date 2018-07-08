import React, { Component } from 'react';
import * as d3 from 'd3';
import './pieStyling.css';

export default class BudgetPie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            budgetData:[{type:"Food",balance:20},
            {type:"Bonding",balance:30},
            {type:"Investment",balance:50}],
        }
        this.createBarChart = this.createBarChart.bind(this)
        this.updateBarChart = this.updateBarChart.bind(this)
    }
    componentDidMount() {
        fetch('/api/budgets')
        .then(
          (results) => results.json()
        ).then(
          (data) => {this.setState({budgetData:data}); this.createBarChart()}
        )
    }
    componentDidUpdate() {
        console.log(this.state.budgetData)
        this.updateBarChart();
    }

    updateBarChart() {
        const node = this.node
        const pie = d3.pie().value((d)=>d.value);
        const slices = pie(this.state.budgetData);
        console.log(slices);

        const arc = d3.arc()
        .innerRadius(this.props.innerRadius)
        .outerRadius(this.props.outerRadius);
        
        const color =  d3.scaleOrdinal()
		//this assumes you have 3 groups of data//﻿each of the domains corresponds to a color set
        .domain(["Food", "Recreation", "Travel", "Investment"])
        .range(["#FACED0", "#CBB0D1", "#DAABB1", "#FFFFFF"]);
        console.log(color);

        var svg = d3.select(node);
        var g = svg.select('g')
        .attr('transform', 'translate(' 
        + this.props.outerRadius + ', ' 
        + this.props.outerRadius + ')')

        g.selectAll('path.slice')
        .data(slices)
            .enter()
            .append('path')
            .attr('class', 'slice')
            .attr('d', arc)
            .attr('fill', (d) => color(d.data.type))

        // building a legend is as simple as binding
        // more elements to the same data. in this case,
        // <text> tags
        var labelText = d3.select('g')
            .selectAll('text')
            .data(slices)
            .enter()
                
        labelText.append('text')
            .attr('x', d => arc.centroid(d)[0])
            .attr('y', d => arc.centroid(d)[1])
            .attr('dy', '-0.2em')
            .attr("text-anchor", "middle")
            .text((d) => d.data.type)

        labelText.append('text')
            .attr('x', d => arc.centroid(d)[0])
            .attr('y', d => arc.centroid(d)[1])
            .attr('dy', '0.9em')
            .attr("text-anchor", "middle")
            .attr("font-weight","bold")
            .text((d) => "$"+d.data.balance)
    }

    createBarChart() {
        const title = this.props.title.replace(/\s+/g, '-').toLowerCase()

        const node = this.node
        const pie = d3.pie().value((d)=>d.balance);
        const slices = pie(this.state.budgetData);
        console.log(slices);

        const arc = d3.arc()
        .innerRadius(this.props.innerRadius)
        .outerRadius(this.props.outerRadius);
        
        const color =  d3.scaleOrdinal()
		//this assumes you have 3 groups of data//﻿each of the domains corresponds to a color set
        .domain(["Food", "Recreation", "Travel", "Investment"])
        .range(["#FACED0", "#CBB0D1", "#DAABB1", "#FFFFFF"]);
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
            .attr('fill', (d) => color(d.data.type))

        // building a legend is as simple as binding
        // more elements to the same data. in this case,
        // <text> tags
        var labelText = d3.select('g')
            .selectAll('text')
            .data(slices)
            .enter()
                
        labelText.append('text')
            .attr('x', d => arc.centroid(d)[0])
            .attr('y', d => arc.centroid(d)[1])
            .attr('dy', '-0.2em')
            .attr("text-anchor", "middle")
            .text((d) => d.data.type)

        labelText.append('text')
            .attr('x', d => arc.centroid(d)[0])
            .attr('y', d => arc.centroid(d)[1])
            .attr('dy', '0.9em')
            .attr("text-anchor", "middle")
            .attr("font-weight","bold")
            .text((d) => "$"+d.data.balance)
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