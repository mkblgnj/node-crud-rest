const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let ProductSchema = new Schema({
//     name: {type: String, required: true , max: 100},
//     price: {type: Number, required: true}
// });

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

//Export the Model
module.exports = mongoose.model('Product',ProductSchema);