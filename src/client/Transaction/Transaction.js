import React, { Component } from 'react';
import './Transaction.css'

export default class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
            <div className = 'transaction-block'>
                <div className = 'transaction-section'>
                    Total Company Income
                </div>
                <div className = 'transaction-section-value'>
                    ${this.props.companyIncome}
                </div>
            </div>

            <div className = 'transaction-block'>
            <   div className = 'transaction-section'>
                    Total Spending Allowance
                </div>
                <div className = 'transaction-section-value'>
                    ${this.props.allowance}
                </div>
            </div>
        </div>
    }
}