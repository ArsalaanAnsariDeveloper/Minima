const express = require('express');
const os = require('os');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Rehive = require('rehive');

// Configuration for rehive package

var config = {
    apiVersion: 3, 
    apiToken: process.env.RAPI
}

const rehive = new Rehive(config);

// Mongo connections, setup environment variables for env to work

mongoose.Promise = require('bluebird');

const DBUSER = process.env.DBUSER
const DBPASS = process.env.DBPASS

var URL = 'mongodb://' + DBUSER + ":" + DBPASS + '@ds129801.mlab.com:29801/arsalaanrehive'

console.log(URL)
mongoose.connect(URL)
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

 function sumUsers(callback){
    rehive.admin.accounts.get().then(function (res) {
        console.log(res);
        var sum = 0;

        for( var i = 0; i < res.results.length; i++){
            sum += res.results[i].currencies[0].balance;
        }

        var cur = res.results[0].currencies[0].currency.description;
        console.log(cur);
        
        console.log(jsonres);
        var jsonres = {company: "Wave", balance : sum, currency: cur }

        callback(jsonres);
    }, function (err) {
        console.error(err.stack);
    });


}

function userIncome(reference, callback){
    
    rehive.admin.accounts.get({reference: reference}).then(function (res) {
       var user = res.user.email;
       var bal = res.currencies[0].balance;
       var cur = res.currencies[0].currency.description;

       console.log(user);
       console.log(bal);
       console.log(cur);
       var jsonres = {username: user, balance : bal , currency: cur };
       callback(jsonres);
    }, function (err) {
        console.error(err.stack)
    });

}


app.use(express.static('dist'));
app.get('/app')
app.get('/api/company', (req, res) => sumUsers(data => {
    res.end(JSON.stringify(data));
  }))
app.get('/api/users/:reference', (req, res) => userIncome(req.params.reference, data => {
    res.end(JSON.stringify(data));
  }))
app.listen(8080, () => console.log('Listening on port 8080!'));
