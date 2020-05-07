# NODE CRUD REST APIs

A REST API Endpoints Built using Node.js and Express.js for Basic CRUD operations on a Product Model having Name and Price as attribute.

## Getting Started

To Start Playing with the APIs copy the Basic URL into your POSTMAN, and follow the endpoints details given below.

### Prerequisites
You need to install the REST API CLient Software(POSTMAN) to play with the APIs.

```
Download from here:https://www.postman.com/downloads/
```

### API DOCS

Given The Endpoints , methods, paramters and body request you should make to perform the CRUD operations.

#### BaseURL: 
```
https://node-crud-restapi.herokuapp.com/products
```

#### Create a Product : 
```
Method: POST 
Endpoint: /create
Header: no-header
Body: (x-www-form-urlencoded)
      name: String
      price: Number
```

#### Read a Product : 
``` 
Method: GET
Endpoint:/:id
Header: no-header
```

#### Update a Product : 
```
 Method: PUT
 Endpoint:/:id/update
 Header: no-header
 Body: (x-www-form-urlencoded)
        name: String
        price: Number
```

#### Delete a Product : 
``` 
Method: DELETE
Endpoint:/:id/delete
Header: no-header
```

## Deployment

This Node App is Deployed on Heroku, with Free Tier plan

## Built With

* [Node.js](https://nodejs.org/en/docs/) 
* [Express.js](https://expressjs.com/)
* [Heroku](https://www.heroku.com/) 

## Contributing

Love to have a Contribution from you on this project. :)


## Authors

* **Mayank Bansal** - *Initial work*


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
* StackOverflow
* Node Js Docs
