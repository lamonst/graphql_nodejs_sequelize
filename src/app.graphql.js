const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');

const expressGraphql = require('express-graphql');
const schema = require('./schema/schema');


const app = express();

const port = 8081;

app.set('port', port);

mongoose.connect(config.connection_strings);


//Declara models
const Product = require('./models/Product')

//Declara rotas
const indexRoute = require('./routes/index-route');
const productRouter = require('./routes/product-route')

const productResolver = require('./resolvers/product-resolver');

app.use('/', expressGraphql({
    schema: schema,
    rootValue: productResolver,
    graphiql: true
}))

module.exports = app;
