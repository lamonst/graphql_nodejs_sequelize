const Sequelize = require('sequelize');
const connection = require('../../config/database.connection');

class Product extends Sequelize.Model{}

Product.init({
    title: Sequelize.STRING,
    description: Sequelize.STRING
},
{
    timestamps: false,
    paranoid: true,
    freezeTableName: true,
    tableName: 'product',
    sequelize: connection,
});
module.exports = Product;