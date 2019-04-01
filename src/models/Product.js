
const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require('graphql');
const { resolver } = require('graphql-sequelize');
const {ProductEntity} = require('../../app/models/product');

const productType = new GraphQLObjectType({
    name: 'product',
    description: 'A product',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'The id of the product.',
      },
      title: {
        type: GraphQLString,
        description: 'The title of the product.',
      },
      description: {
        type: GraphQLString,
        description: 'The description of the product.',
      }
    }
  })

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'root',
        fields: {
            products: {
                type: new GraphQLList(productType),
                resolve: resolver(ProductEntity)
            }
        }        
    })
});

module.exports = schema;