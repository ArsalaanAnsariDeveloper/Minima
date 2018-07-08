import React, { Component } from 'react';
import BudgetPie from './BudgetPie/BudgetPie'
import Dashboard from './Dashboard/Dashboard'
import Navbar from './Navbar/Navbar'
import './Homepage.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className = "navbar">
        <Navbar userID={this.props.userID}/>
        </div>
        <div className = "dashComponent">
        <Dashboard/>
        </div>

        <div className = "chartComponent">
          <BudgetPie 
            outerRadius={100}
            innerRadius={75}
            title="My Budget"/>
        </div>
      </div>
    );
  }
}
