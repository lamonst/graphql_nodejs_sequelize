const express = require('express');
const graphqlHTTP = require('express-graphql');
const productResolver = require('../src/resolvers/product-resolver')
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: productResolver,
  graphiql: true
}));

module.exports = app;