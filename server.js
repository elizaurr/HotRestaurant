// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Star Wars Characters (DATA)
// =============================================================
var table = [

  {
    routeName: "elizaur",
    customerName: "Elizaur Reyes",
    phoneNumber: "7326404475",
    customerEmail: "elizaurreyes@yahoo.com",
    customerID: 'eliID'   
  },

  {
    routeName: "Tom",
    customerName: "Tom Jones",
    phoneNumber: "7324567890",
    customerEmail: "TomJones@yahoo.com",
    customerID: 'eliID' 
  },

  {
    routeName: "Jane",
    customerName: "Jane Doe",
    phoneNumber: "7324445555",
    customerEmail: "JaneDoe@yahoo.com",
    customerID: 'JaneID'
  }
]

    // Routing Examples

    // Basic route examples that sends the user first to the AJAX Page
    
    app.get('/', function(req, res){
      res.sendFile(path.join(__dirname, 'index.html'));
    })

    app.get('/tables', function(req, res){
      res.sendFile(path.join(__dirname, 'tables.html'));
    })

    app.get('/reservations', function(req, res){
      res.sendFile(path.join(__dirname, 'reservations.html'));
    })

     app.get('/add', function(req, res){
      res.sendFile(path.join(__dirname, 'add.html'));
    })

    app.get('/all', function(req, res){
      res.sendFile(path.join(__dirname, 'all.html'));
    })
