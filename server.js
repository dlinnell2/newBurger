var express = require('express');
var hbrs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.engine("handlebars", hbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require('./controllers/burgers_controller.js')(app);

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});