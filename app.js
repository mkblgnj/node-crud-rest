const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const app = express();
const mongoose = require('mongoose')
const password = 'qwerty123';
const url =
`mongodb+srv://hathodi:${password}@cluster0-0raj0.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })


//Set up mongoose connection 
// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb+srv://hathodi:qwerty123@products-app-crud-0raj0.mongodb.net/test';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products',product);

//let port  = 1234;
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('Server is up and running on port number ' + port);
    
});
