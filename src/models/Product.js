const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is mandatory.'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is mandatory.']
    }
});

module.exports = mongoose.model('Product', schema);