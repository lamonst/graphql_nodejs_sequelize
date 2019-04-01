'use strict'

const http = require('http');
const app = require('../src/app.graphql')
// const app = require('../src/app')

const server = http.createServer(app);

const port = 8081;

server.listen(port);
console.log('API com nodemon rodando na porta ' + port);