const Sequelize = require('sequelize');
const connection = require('../../config/database.connection');

class Product extends Sequelize.Model{}

Product.init({
    // id: Sequelize.INTEGER,
    title: Sequelize.STRING,
    description: Sequelize.STRING
},
{
    timestamps: false,
    paranoid: true,
    freezeTableName: true,
    tableName: 'product',
    validate: {
        isNotNull(){
            if(this.title === null || this.title === ""){
                throw new Error ("Title's Field is mandatory!");
            }
        }
    },
    sequelize: connection,
});

module.exports = Product;