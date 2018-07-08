import React, { Component } from 'react';
import BudgetPie from './BudgetPie/BudgetPie'
import Dashboard from './Dashboard'
import History from './History'
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: null 
    };
  }

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {

    var companyData = {"company":"Test","income":100,"currency":"USD"};
    var budgetData = [{category:"Food",value:20},
      {category:"Bonding",value:30},
      {category:"Investment",value:50}];
    var spendingData = [{category:"Food",value:15},
      {category:"Bonding",value:15},
      {category:"Investment",value:40}];

    var totalSpent = 0;
    spendingData.map((data)=>{totalSpent += data.value});

    spendingData.push(
      {category:"Unspent",value: companyData.income - totalSpent }
    )

    return (
      <div>
        <div className = "dashComponent">
          <Dashboard 
            companyIncome = {10000}
            allowance = {3000}
          />
          <History
            transHistory = {['hi','i\'m','broke']}
          />
        </div>

        <div className = "chartComponent">
          <BudgetPie 
            outerRadius={100}
            innerRadius={80}
            data={budgetData}
            title="My Budget"/>
        </div>
      </div>
    );
  }
}
