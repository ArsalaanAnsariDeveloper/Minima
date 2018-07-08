import './Button.css'
import React, {Component} from 'react'

export default class Button extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <div className="round-button">
                {this.props.text}
            </div>
        </div>
    }
}