import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div class="navWrapper">
            <div class="navIcons">
                <div id="add-user">
                    add user
                </div>
                <div id="edit-budget">
                    edit budget
                </div>
                <div id="settings">
                    settings
                </div>
            </div>
        </div>
    }
}