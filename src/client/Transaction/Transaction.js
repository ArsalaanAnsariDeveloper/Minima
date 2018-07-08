import React, { Component } from 'react';
import './Transaction.css'

export default class Transaction extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
            <div className = 'transaction-title'>
                Create Transaction
            </div>

            <div className = 'transaction-name'>
                <input type="text" name="name" />
            </div>
            <div className = 'transaction-category'>
                <input type="text" name="name" />
            </div>
        </div>
    }
}