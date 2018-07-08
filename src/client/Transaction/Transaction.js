import React, { Component } from 'react';
import './Transaction.css'
import Navbar from '../Homepage/Navbar/Navbar'
import Button from '../Button/Button'

export default class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            category: "",
            amt: 0,
            recipient: "",
            user: "arsalaanfacebook@gmail.com"
        }
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleAmtChange = this.handleAmtChange.bind(this);
        this.handleRecipientChange = this.handleRecipientChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event){
        this.setState({title:event.target.value})
    }

    handleCategoryChange(event){
        this.setState({category:event.target.value})
    }

    handleAmtChange(event){
        this.setState({amt:event.target.value})
    }

    handleRecipientChange(event){
        this.setState({recipient:event.target.value})
    }

    handleSubmit(event) {
        
        
        event.preventDefault();

        var myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');

        var dataUser =  {
            send : this.state.user,
            recv : this.state.recipient,
            amt : parseInt(this.state.amt)    
          }

        var dataExt = {
            user : this.state.user,
            type : this.state.category,
            amt : parseInt(this.state.amt),
            description: this.state.title
        }

        

        if(this.state.category ===  "user"){
            fetch('/api/transact', {
                method: 'POST',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default',
                body: JSON.stringify(dataUser)
              }).then(function(response) {     
                return(response.json)
              });
        }else{
            alert(JSON.stringify(dataExt))
            fetch('/api/tranb', {
                method: 'POST',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default',
                body: JSON.stringify(dataExt)
              }).then(function(response) {   
                console.log(response.json)
                return(response.json)
              });
        }
        


    }

    render(){
        return <div>
            <Navbar userID = {this.props.userID}/>
            <div className="transaction-wrapper">
                <div className = 'transaction-title'>
                    Create Transaction
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <br/>Title<br/>
                        <input type="text" defaultValue={this.state.title} onChange={this.handleTitleChange} />
                    </label><br/><br/>

                    <label>
                    Expense Category<br/>
                        <select defaultValue={this.state.category} onChange={this.handleCategoryChange}>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Recreation">Recreation</option>
                            <option value="Investment">Investment</option>
                        </select>
                    </label><br/><br/>

                    <label>
                    Amount ($)<br/>
                        <input type="number" defaultValue={this.state.amt} onChange={this.handleAmtChange} />
                    </label><br/><br/>

                    <label>
                    Recipient<br/>
                        <input type="text" defaultValue={this.state.recipient} onChange={this.handleRecipientChange} />
                    </label><br/><br/>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    }
}

Transaction.defaultProps = {
    userID:"4W442QBG9Q"
}