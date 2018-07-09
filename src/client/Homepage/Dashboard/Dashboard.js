import React, { Component } from 'react';
import Budget from './Budget';
import History from './History'
import Button from '../../Button/Button'
import './Dashboard.css';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: "user",
            companyBudget: 0,
            allowance: 0,
            trans: [
                {"_id":"0","type":"user","amt":5,"description":"chair"},
                {"_id":"1","type":"user","amt":5,"description":"desk"},
                {"_id":"2","type":"Food","amt":20,"description":"pizza"},
            ]
        };
    }

    componentDidMount() {
        fetch('/api/company')
        .then(
          (results) => results.json()
        ).then(
          (data) => {this.setState({companyBudget:data["balance"]})}
        )
        fetch('/api/users/'+this.props.userID)
        .then(
          (results) => results.json()
        ).then(
          (data) => {
            this.setState({user:data["username"]})
            this.setState({allowance:data["balance"]})
          }
        )
        fetch('/api/listtrans')
        .then(
          (results) => results.json()
        ).then(
          (data) => {this.setState({trans:data})}
        )
      }

    render(){
        return <div className='dashboard'>
            <div className = 'dashboard-title'>
                Dashboard
            </div>
            <div className = 'dashboard-sub'>
                Learn about how this software works <a href="#">here</a>.
            </div>
        <Budget
            companyIncome = {this.state.companyBudget}
            allowance = {this.state.allowance}
          />
          <History
            transHistory = {this.state.trans}
          />
          <div className = "transactionLink">
            <Button path="/transaction" text="New Transaction"/>
          </div>
        </div>
    }
}