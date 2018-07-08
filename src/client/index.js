import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
      </div>
  </Router> 
    , document.getElementById('root'));
