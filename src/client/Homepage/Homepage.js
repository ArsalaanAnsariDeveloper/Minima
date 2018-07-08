import React, { Component } from 'react';
import BudgetPie from './BudgetPie/BudgetPie'
import Dashboard from './Dashboard/Dashboard'
import Navbar from './Navbar/Navbar'
import './Homepage.css';

export default class Homepage extends Component {

  constructor(props) {
    super(props);
    console.log("user"+this.props.userID)
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
        <Dashboard userID={this.props.userID}/>
        </div>

        <div className = "chartComponent">
          <BudgetPie 
            outerRadius={160}
            innerRadius={120}
            title="My Budget"/>
        </div>
      </div>
    );
  }
}

Homepage.defaultProps = {
  userID:"4W442QBG9Q"
}