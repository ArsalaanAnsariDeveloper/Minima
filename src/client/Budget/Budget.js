import Navbar from '../Homepage/Navbar/Navbar'
import React, { Component } from 'react';



export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {food: '', travel: '', rec: '', inv : ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    componentDidMount() {
        
    }

    handleSubmit(){
        console.log(this.state.food);
        
    }

    render(){
        return ( 
        <div>
        <div className = "navbar">
            <Navbar/>
        </div>
        <form onSubmit={this.handleSubmit}>
            <label>
              Food Budget:
              <input type="number" defaultValue={this.state.food} onChange={this.handleChange} />
            </label>
            <label>
              Travel Budget:
              <input type="number" defaultValue={this.state.travel} onChange={this.handleChange} />
            </label>
            <label>
              Recreation Budget:
              <input type="number" defaultValue={this.state.rec} onChange={this.handleChange} />
            </label>
            <label>
              Investment Budget:
              <input type= "number" defaultValue={this.state.inv} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form> 
        </div>
        );
    }
}