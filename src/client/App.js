import React, { Component } from 'react';
import BudgetPie from './BudgetPie/BudgetPie'
import Dashboard from './Dashboard/Dashboard'
import Navbar from './Navbar/Navbar'
import './app.css';

export default class App extends Component {
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
