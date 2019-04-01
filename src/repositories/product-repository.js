'use strict'

const Product = require('../../app/models/product');
 
exports.get = async () => {
    console.log("Query get");
    return await Product.findAll();
}

exports.getById = async (id) => {
    return await Product.findByPk(id);
}

exports.update =  async (id, data) => {
    await Product.update(
        data, {
        where: {
            id
        }
    });    

    return await Product.findByPk(id);
}

exports.delete = async (id) => {
    return await Product.destroy({
        where : {
            id: id
        }
    });    
}

exports.save = async (data) => {
    console.log("Data: " + JSON.stringify(data));    
    return await Product.create(data);
    // return await Product
    // .sync()
    // .then(() => {
    //     Product.create(data);
    // })
    // .catch(e => {
    //     console.log("Error: ", e)
    // });
}