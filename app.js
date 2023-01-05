var express = require('express');
var router = require('./router');
var bodyParser = require('body-parser');


var app = express();


app.use(bodyParser.json())


app.use("/home", require('./router'))


app.listen(3000, (err) => { 
    if (err) console.log('err',err)
    else console.log('server started')

});