# node-crud-rest
A REST API Built with Node.Js &amp; Express.js to depict a basic CRUD Operations
BaseURL: "https://node-crud-restapi.herokuapp.com/products",
Create : 
        Method: POST 
        Endpoint: /create
        Header: no-header
        Body: (x-www-form-urlencoded)
          name: String
          price: Number
          
Read   : 
        Method: GET
        Endpoint:/:id
        Header: no-header
        
Update :
        Method: PUT
        Endpoint:/:id/update
        Header: no-header
        Body: (x-www-form-urlencoded)
          name: String
          price: Number
          
Delete : 
        Method: DELETE
        Endpoint:/:id/delete
        Header: no-header
