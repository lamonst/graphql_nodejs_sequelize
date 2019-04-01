const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8081;

app.set('port', port);

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended : true
}))

//Declara rotas
const indexRoute = require('./routes/index-route');
// const productRouter = require('./routes/product-route')

app.use('/', indexRoute);

module.exports = app;
