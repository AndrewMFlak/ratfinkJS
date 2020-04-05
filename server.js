// var path = require("path");
const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var session = require('express-session');
// var controller = require('./controllers/controller');

const app = express();
var PORT = process.env.PORT || 3000;
console.log(PORT)

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGOD_URI||"mongodb://localhost/ratfink", {
        useNewUrlParser: true
        // useUnifiedToplogy:true
    }
);

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}`);
    console.log('http://localhost:3000/');
    console.log('http://localhost:3001/api/users');
    console.log('http://localhost:3001/api/currentHand');
    console.log("https://sheltered-escarpment-60423.herokuapp.com/");
});
app.get('/',(req,res)=> {
    console.log(req);
    res.send('Ratfink API up and running!!!')
})