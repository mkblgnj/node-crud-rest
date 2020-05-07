const Product = require('../models/product.models');
const mongoose = require('mongoose');

//simple version , without validation or sanitation

exports.welcome = function(req,res) {
    var endpoints = {
        BaseURL: "https://node-crud-restapi.herokuapp.com/products",
        Create : {Method: "POST", Endpoint: "/create" },
        Read   : {Method: "GET",Endpoint:"/:id"},
        Update : {Method: "PUT", Endpoint:"/:id/update"},
        Delete : {Method: "DELETE", Endpoint:"/:id/delete"}
    }
    res.send(endpoints);
}


exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    product.save(function (err) {
        if (err) {
            //res.send('error')
            return next(err);
        }
        var Output = {
            Success: true,
            Data : product,
            Message: "Product Created successfully"
        }
        res.send(Output);
    })
};

exports.product_details = function(req, res) {
    Product.findById(req.params.id , function(err, product) {
        if (err) return next(err);
        var msg;
        if(product){
            msg = "Product Found"
        }
        else{
            msg = "Product not found"
        }
        var Output = {
            Success: true,
            Data : product,
            Message: msg
        }
        res.send(Output);
    })
};

exports.product_details_all = function(req, res) {
    Product.find({},function(err, product) {
        //if (err) return next(err);
        var msg;
        if(product){
            msg = "Product Found"
        }
        else{
            msg = "Product not found"
        }
        var Output = {
            Success: true,
            Data : product,
            Message: msg
        }
        res.send("Hello");       
   })
 
};


exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id , {$set: req.body},
function (err, product) {
    if(err) return next(err);
    var Output = {
        Success: true,
        Data : req.body,
        Message: "Product Updated Succesfully"
    }
    res.send(Output);
});
};

exports.product_delete = function(req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if(err) return next(err);
        var Output = {
            Success: true,
            Data : {},
            Message: "Product Deleted Succesfully"
        }
        res.send(Output);
        })
};
