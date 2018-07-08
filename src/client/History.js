import React, { Component } from 'react';
import './History.css';

export default class History extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
            <div className = 'dashboard-section'>
                Transaction History
                {this.props.transHistory.map((data)=><li>{data}</li>)}
            </div>
        </div>
    }
}