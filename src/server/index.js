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
        var sum = 0;

        for( var i = 0; i < res.results.length; i++){
            sum += res.results[i].currencies[0].balance;
        }

        var cur = res.results[0].currencies.currency;
        
        console.log(jsonres);
        var jsonres = {company: "Wave", income : sum, currency: cur }

        callback(jsonres);
    }, function (err) {
        console.error(err.stack);
    });


}


app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/app')
app.get('/api/company', (req, res) => sumUsers(data => {
    res.end(JSON.stringify(data));
  }))
app.listen(8080, () => console.log('Listening on port 8080!'));
