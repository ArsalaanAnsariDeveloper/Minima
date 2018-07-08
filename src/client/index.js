import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage/Homepage'
import Transaction from './Transaction/Transaction';

var userID = '4W442QBG9Q';
ReactDOM.render(<Homepage userID = {userID}/>, document.getElementById('root'));

//ReactDOM.render(<Transaction userID = {userID} />, document.getElementById('root'));
