import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage/Homepage';
import Transaction from './Transaction/Transaction'
import Budget from './Budget/Budget'
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
      <div>
        <Route exact path= "/" component={Homepage} />
        <Route exact path= "/transaction" component={Transaction} />
        <Route exact path= "/budget" component={Budget} />

       </div>
   </Router> 
    , document.getElementById('root'));
