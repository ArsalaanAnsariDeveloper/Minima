import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage/Homepage';
import Transaction from './Transaction/Transaction'
import { BrowserRouter as Router, Route } from 'react-router-dom';

<<<<<<< HEAD

ReactDOM.render(
    <Router>
      <div>
        <Route exact path= "/" component={Homepage} />
        <Route exact path= "/transaction" component={Transaction} />

      </div>
  </Router> 
    , document.getElementById('root'));
=======
var userID = '4W442QBG9Q';
ReactDOM.render(<Homepage userID = {userID}/>, document.getElementById('root'));

//ReactDOM.render(<Transaction userID = {userID} />, document.getElementById('root'));
>>>>>>> 33b5b170fa4c733249bf2f382c97e35f9859adc6
