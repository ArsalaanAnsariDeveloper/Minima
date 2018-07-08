import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div className="navWrapper">
            <div className = 'user-info'>
                You are logged in as {this.props.user}
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