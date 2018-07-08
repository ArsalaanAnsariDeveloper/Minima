import React, { Component } from 'react';
import './Transaction.css'

export default class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
            <div className = 'dashboard-block'>
                <div className = 'dashboard-section'>
                    Total Company Income
                </div>
                <div className = 'dashboard-section-value'>
                    ${this.props.companyIncome}
                </div>
            </div>

            <div className = 'dashboard-block'>
            <   div className = 'dashboard-section'>
                    Total Spending Allowance
                </div>
                <div className = 'dashboard-section-value'>
                    ${this.props.allowance}
                </div>
            </div>
        </div>
    }
}