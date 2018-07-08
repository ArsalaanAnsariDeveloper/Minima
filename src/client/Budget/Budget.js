import Navbar from '../Homepage/Navbar/Navbar'
import React, { Component } from 'react';
import './Budget.css'



export default class BudgetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {food: '', travel: '', rec: '', inv : ''};
    
        this.handleFoodChange = this.handleFoodChange.bind(this);
        this.handleTravelChange = this.handleTravelChange.bind(this);
        this.handleRecChange = this.handleRecChange.bind(this);
        this.handleInvChange = this.handleInvChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleFoodChange(event) {
        this.setState({food: event.target.value});
    }

    handleTravelChange(event) {
        this.setState({travel: event.target.value});
    }

    handleRecChange(event) {
        this.setState({rec: event.target.value});
    }

    handleInvChange(event) {
        this.setState({inv: event.target.value});
    }

    componentDidMount() {
        
    }

    handleSubmit(){
        alert(this.state.food+this.state.travel+this.state.rec+this.state.inv);
        
    }

    render(){
        return ( 
        <div className = "budget-form">
        <div className = "navbar">
            <Navbar userID={this.props.userID}/>
        </div>
        <form onSubmit={this.handleSubmit}>
            <label>
              Food Budget:<br/>
              <input type="number" defaultValue={this.state.food} onChange={this.handleFoodChange} />
            </label><br/>
            <label>
              Travel Budget:<br/>
              <input type="number" defaultValue={this.state.travel} onChange={this.handleTravelChange} />
            </label><br/>
            <label>
              Recreation Budget:<br/>
              <input type="number" defaultValue={this.state.rec} onChange={this.handleRecChange} />
            </label><br/>
            <label>
              Investment Budget:<br/>
              <input type= "number" defaultValue={this.state.inv} onChange={this.handleInvChange} />
            </label><br/>
            <input type="submit" value="Submit" />
        </form> 
        </div>
        );
    }
}

BudgetForm.defaultProps = {
    userID:"4W442QBG9Q"
  }