var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var session = require('express-session')
// var passport = require('./config/passport')
var path = require('path')
// var controller = require('./controllers/controller')
var app = express();
var PORT = process.env.PORT || 3000;

// require .env file
// require('dotenv').config({path:__dirname+'/.env'});
// .env TEST
// console.log(process.env.REACT_APP_SERVERTEST);



// Configure body parser for AJAX request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

// public or client/public
app.use(express.static('client/index.html'));

// Add routes, both API and view
// app.use(controller);

//  Set up promise with mongoose
mongoose.Promise = global.Promise;

//  Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/surfDiary", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    console.log('http://localhost:3000/')
    console.log('http://localhost:3001/api/spots')
    console.log('https://blooming-coast-38158.herokuapp.com/') 
    console.log('<br>');
});
// app.get('/',(req,res)=>res.send(' ratfink....V '))



