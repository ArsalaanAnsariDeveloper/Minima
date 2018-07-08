import Navbar from '../Homepage/Navbar/Navbar'
import React, { Component } from 'react';



export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {food: 0, travel: 0, rec: 0, inv : 0};
    
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

        var myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');

        var data = {
            food : parseInt(this.state.food),
            rec: parseInt(this.state.rec),
            travel: parseInt(this.state.travel),
            inv: parseInt(this.state.inv)
        }

        fetch('/api/editbudget', {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(data)
          }).then(function(response) {
            
            return(response.json)
          });
        

    }

    render(){
        return ( 
        <div>
        <div className = "navbar">
            <Navbar/>
        </div>
        <form className="budget-form" onSubmit={this.handleSubmit}>
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