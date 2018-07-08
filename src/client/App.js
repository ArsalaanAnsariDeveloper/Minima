import React, { Component } from 'react';
import SpendingChart from './BudgetBar/BudgetBar'
import BudgetPie from './BudgetPie/BudgetPie'
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null ,
    active: 'bar'};

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  handleClick() {
      var active = this.state.active;
      var newActive = active === 'pie' ? 'bar' : 'pie';
      this.setState({
          active: newActive
      });
      console.log(this.state.active);
  }

  render() {
    var active = this.state.active;

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
          {
            active === 'pie' 
            ? <div className = "chartComponent">
              <BudgetPie 
                outerRadius={100}
                innerRadius={80}
                data={budgetData}
                title="My Budget Target"/>
              <BudgetPie
                outerRadius={100}
                innerRadius={80}
                data={spendingData}
                title="My Current Spending"
              />
            </div>
            : <div className = "chartComponent">
              <SpendingChart 
                data1 = {[1,2,3,4]}
                data2 = {[2,3,4,5]}
                budgetData={budgetData} 
                spendingData = {spendingData} 
                size={[100,100]}
              />
            </div>
          }
        <div className = "toggle-layer">
          <div className="button toggle" id="chart-toggle" onClick = {this.handleClick}>
            {this.state.active === 'pie' ? 'View Bar' : 'View Pie'}
          </div>
        </div>
        {this.state.username ? (
          <h1>Hello {this.state.username}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}
