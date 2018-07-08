import './Button.css'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'


export default class Button extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <div className="round-button">
                <Link to='/transaction'>New Transaction</Link>
            </div>
        </div>
    }
}