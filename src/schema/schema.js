const {buildSchema} = require('graphql');

const schema = buildSchema(`
  type Product {
    id: ID
    title: String
    description: String
  }
  type Query {
    getById(id: ID!): Product
    get: [Product]
  }
  type Mutation {
    createProduct(title: String!, description: String!): Product
    updateProduct(id: ID!, title: String!, description: String): [Product]
  }
`);

module.exports = schema;