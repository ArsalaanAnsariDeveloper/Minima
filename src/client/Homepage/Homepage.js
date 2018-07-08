import React, { Component } from 'react';
import BudgetPie from './BudgetPie/BudgetPie'
import Dashboard from './Dashboard/Dashboard'
import Navbar from './Navbar/Navbar'
import Button from '../Button/Button'
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
        <Navbar/>
        </div>
        <div className = "dashComponent">
        <Dashboard userID={this.props.userID}/>
        </div>

        <div className = "chartComponent">
          <BudgetPie 
            outerRadius={100}
            innerRadius={75}
            title="My Budget"/>
        </div>


        <div className = "transactionLink">
          <Button path="/transaction" text="New Transaction"/>
        </div>
      </div>
    );
  }
}
