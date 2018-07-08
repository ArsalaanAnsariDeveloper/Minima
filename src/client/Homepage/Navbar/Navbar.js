import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        fetch('/api/users/'+this.props.userID)
        .then(
          (results) => results.json()
        ).then(
          (data) => {
            this.setState({user:data["username"]})
          }
        )
    }

    render(){
        return <div className="navWrapper">
            <div className = 'user-info'>
                You are logged in as {this.state.user}
            </div>
            <div className="navIcons">
                
                <div id="add-user">
                    add user
                </div>
                <div id="edit-budget">
                    <Link to='/budget'>edit budget</Link>
                </div>
                <div id="settings">
                    settings
                </div>
                <div id= "dashboard">
                    <Link to='/'>dashboard</Link>

                </div>
            </div>
        </div>
    }
}