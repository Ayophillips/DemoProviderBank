var mongoose = require('mongoose');
var express = require("express");
var bodyParser = require('body-parser');

//Define a schema
var Schema = mongoose.Schema;

var DemoProviderSchema = new Schema({
  firstname: String,
  surname: String,
  email: String,
  mobile_no: Number
});

var DemoProvider = mongoose.model('DemoProvider', DemoProviderSchema);

var app = express();
var port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/openaccount", (req, res) => {
    var myData = new DemoProvider(req.body);
    myData.save()
    .then(item => {
    res.send("saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
    
   app.listen(port, () => {
    console.log("Server listening on port " + port);
   });