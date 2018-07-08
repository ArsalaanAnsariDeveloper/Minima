import React, { Component } from 'react';

export default class History extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
            <div className = 'dashboard-section'>
                Transaction History
            </div>
            <table className='expenses'>
            <tbody>
                <tr id="titles">
                    <th>Title</th>
                    <th>Expense Category</th>
                    <th>Amount</th>
                </tr>
            {this.props.transHistory.map((data, i)=>
                <tr key={"row-"+i}><td>{data.description}</td>
                    <td>{data.type}</td>
                    <td>${data.amt}</td></tr>
            )}
            </tbody>
            </table>
        </div>
    }
}