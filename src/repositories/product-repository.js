'use strict'

const Product = require('../../app/models/product');
 
exports.get = async () => {    
    return await Product.findAll();
}

exports.getById = async (id) => {
    return await Product.find({
        _id: id
    });
}

exports.update =  async (id, data) => {
    await Product.update({
        _id: id
    }, data);    

    return await Product.find({
        _id: id
    });
}

exports.delete = async (id) => {
    return await Product.findByIdAndDelete({
        _id: id
    });    
}

exports.save = async (data) => {
    console.log("Data: " + JSON.stringify(data));
    const product = new Product(data);
    return await product.save();
}