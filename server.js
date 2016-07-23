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
    CustomerName: "Elizaur Reyes",
    phoneNumber: "7326404475",
    customerEmail: "elizaurreyes@yahoo.com",
    customerID: 'eliID'   
  },

  {
    routeName: "Tom",
    CustomerName: "Tom Jones",
    phoneNumber: "7324567890",
    customerEmail: "TomJones@yahoo.com",
    customerID: 'eliID' 
  },

  {
    routeName: "Jane",
    CustomerName: "Jane Doe",
    phoneNumber: "7324445555",
    customerEmail: "JaneDoe@yahoo.com",
    customerID: 'JaneID'
  }
]



// On the click the newTable data will be added

    $('#addBtn').on("click", function(){

      var newTable = 
      {
        CustomerName: $("#name").val().trim(),
        phoneNumber: $("#phone").val().trim(),
        customerEmail: $("#email").val().trim(),
        customerID: $("#ID").val().trim()
      };

      // Question: What does this code do??
      $.post( "http://localhost:3000/api/new", newTable)
        .done(function(data){
          console.log(data);
          alert("Adding character...")
        })

      return false;

    }); 

    // Code to push all data on the click

     var currentURL = window.location.origin;
    console.log(currentURL + "/api");
    $.get(currentURL + "/api", function(data) {
        for (var i = 0; i < data.length; i++) {
            var wellSection = $("<div>");
            tableSection.addClass('well');
            tableSection.attr('id', 'tableWell-' + i)
            $('#wellSection').append(wellSection);
            $("#tableWell-" + i).append("<h2>data: " + data[i].name + "</h2>");
            $("#tableWell-" + i).append("<h3>phoneNumber: " + data[i].phoneNumber + "</h4>");
            $("#tableWell-" + i).append("<h3>eMail: " + data[i].eMail + "</h4>");
            $("#tableWell-" + i).append("<h3>uniqueID: " + data[i].uniqueID + "</h4>");
        }
    })
