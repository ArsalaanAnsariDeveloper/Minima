const express = require('express');
const os = require('os');
const app = express();
const Rehive = require('rehive');
const bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
// Configuration for rehive package

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

var config = {
    apiVersion: 3, 
    apiToken: process.env.RAPI
}

const rehive = new Rehive(config);

// Mongo connections, setup environment variables for env to work


const DBUSER = process.env.DBUSER
const DBPASS = process.env.DBPASS

var URL = 'mongodb://' + DBUSER + ":" + DBPASS + '@ds129801.mlab.com:29801/arsalaanrehive'

 function sumUsers(callback){
    rehive.admin.accounts.get().then(function (res) {
        console.log(res);
        var sum = 0;

        for( var i = 0; i < res.results.length; i++){
            if(res.results[i].user.email != "external@gmail.com"){
                console.log(res.results[i].user.email);
                sum += res.results[i].currencies[0].balance;
            }
        }

        var cur = res.results[0].currencies[0].currency.description;
        console.log(cur);
        
        console.log(jsonres);
        var jsonres = {company: "Wave", balance : sum/100, currency: cur }

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
       var jsonres = {username: user, balance : bal/100 , currency: cur };
       callback(jsonres);
    }, function (err) {
        console.error(err.stack)
    });

}

function userTransact(send, recv, amt, callback){
    
    rehive.admin.transactions.createTransfer(
        {
            user: send,
            amount: amt * 100,
            currency: 'USD',
            recipient: recv
        }).then(function (res) {
            console.log(res);
        }, function (err) {
            console.error("Transact Failed")
            console.error(err)
        }).then(function(res){
            var description = "From " + String(send) + " to " + String(recv);
            transactBudget(send, "user", amt, description, callback);
        }, function (err) {
            console.error("Transact Failed")
            console.error(err)
        })
}

// Views budgets for all 

function viewBudgets (callback){
    MongoClient.connect(URL, function (err, client) {
        console.log("CONNECTED")
        if (err) throw err
      
        var db = client.db('arsalaanrehive');
      
        db.collection('budget_collection').find({}).toArray(function(error, documents) {
            if (err) throw error;
            console.log(documents);
            callback(documents);
        });
      });
}

// Make transactions within certain budgets 
function transactBudget (username, cat, amt, description,  callback){
    MongoClient.connect(URL, function (err, client) {
        console.log("CONNECTED")
        if (err) throw err
      
        var db = client.db('arsalaanrehive');
        var tranquery = {type: cat };
        var newvalues = {$inc: {balance: amt * -1}}
  
        db.collection("budget_collection").updateOne(tranquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("Doc Updated")
        })
        var transact = {"type" : cat , "amt": amt, "description": description};
        db.collection('transactions').insertOne(transact, function(err, res) {
            if (err) throw err;
            console.log("Transaction Inserted");
        });
        rehive.admin.transactions.createTransfer(
            {
                user: username,
                amount: amt * 100,
                currency: 'USD',
                recipient: "external@gmail.com"
            }).then(function (res) {
                console.log(res);
                callback(res)
            }, function (err) {
                console.error("Transact Failed")
                console.error(err)
            })
               
    });
}


function listtrans (callback){
    MongoClient.connect(URL, function (err, client) {
        console.log("CONNECTED")
        if (err) throw err
        
        var db = client.db('arsalaanrehive');
        
        db.collection('transactions').find({}, {limit: 5}).sort({$natural: -1}).toArray(function(error, documents) {
            if (err) throw error;
            console.log(documents);
            callback(documents);
        });
        });
}

function editbudget (food, rec, travel, inv, callback){
    MongoClient.connect(URL, function (err, client) {
        console.log("CONNECTED")
        if (err) throw err
      
        var db = client.db('arsalaanrehive');
        var updatedVals = [food, rec, travel, inv];
        var typeArr = ["Food", "Recreation", "Travel", "Investment"];
        console.log(typeArr[0]);
        var amount = 0;
        for( var i = 0; i < 4; i++){
            amount = updatedVals[i]
            if(amount == null){
                amount = 0
            }
            var newvalues = {$set :{balance: amount}};
            var tranquery = {"type": typeArr[i] };
            db.collection("budget_collection").updateOne(tranquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("Succesful update");
                callback(res);
            });
        }

    });

}

app.use(express.static('dist'));
app.get('/app');
app.get('/api/company', (req, res) => sumUsers(data => {
    res.end(JSON.stringify(data));
  }));
app.get('/api/users/:reference', (req, res) => userIncome(req.params.reference, data => {
    res.end(JSON.stringify(data));
  }));
app.post('/api/transact', (req,res) =>  {  
    console.log(req.body);
    userTransact(req.body.send, req.body.recv, req.body.amt, data => {
    res.end(JSON.stringify(data));
  } ) });

app.get('/api/budgets', (req, res) => viewBudgets(data => {
    res.end(JSON.stringify(data));
  }));

app.post('/api/tranb', (req,res) => transactBudget(req.body.user, req.body.type, req.body.amt, req.body.description, data => {
    res.end(JSON.stringify(data));
  }))

app.get('/api/listtrans', (req,res) => listtrans(data => {
    res.end(JSON.stringify(data));
  }));

app.post('/api/editbudget', (req,res) => editbudget(req.body.food, req.body.rec, req.body.travel, req.body.inv,  data => {
    res.end(JSON.stringify(data));
  }))
app.listen(8080, () => console.log('Listening on port 8080!'));
