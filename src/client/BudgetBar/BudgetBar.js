import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import * as d3 from 'd3';

export default class SpendingChart extends Component {
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
        const node = this.node
        const dataMax = max(this.props.data2)
        const barWidth = this.props.size[0] / this.props.data1.length;
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]])
        select(node)
        .selectAll('rect')
        .data(this.props.data1)
        .enter()
        .append('rect')
        
        select(node)
        .selectAll('rect')
        .data(this.props.data1)
        .exit()
        .remove()
        
        select(node)
        .selectAll('rect')
        .data(this.props.data1)
        .style('fill', '#fe9922')
        .attr('x', (d,i) => i * barWidth)
        .attr('y', d => this.props.size[1] - yScale(d))
        .attr('height', d => yScale(d))
        .attr('width', barWidth)
    }
    render() {
        return <svg ref={node => this.node = node}
        width={this.props.size[0]} height={this.props.size[1]}>
        </svg>
    }
}