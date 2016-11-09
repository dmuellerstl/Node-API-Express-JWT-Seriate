# Node-API-Express-JWT-Seriate
After a lot of research and testing, I present you with... da-dada-da: A Node.js, Express API with JWT Token Authentication and Seriate for MS SQL Database Integration

## Dependencies
* MS SQL Server (2014 Exrpess was used)
* "app-root-dir": "^1.0.2"
* "body-parser": "^1.15.2"
* "express": "^4.14.0"
* "gulp": "^3.9.1"
* "gulp-nodemon": "^2.2.1"
* "jsonwebtoken": "^7.1.9"
* "seriate": "^0.8.0"

## Setup
* Clone the repository
* Navigate to the repository and run npm install
* Use the nodeapi.sql create script to create the SQL database

## API Usage
* Run the API with node app.js or gulp from the repository root
* To obtain a token, **POST** to _http://localhost:3000/authenticate_
* Send Header with **Key:** _Content-Type_ and **Value:** _application/x-www-form-urlencoded_ 
* Send Body values (application/x-www-form-urlencoded) **Key:** _name_ and **Value:** _apiuser_, **Key:** _password_ and **Value:** _apipassword_
* You should receive a token back in the response. Copy the token value and use it in subsequent API requests
* **GET** to _http://localhost:3000/api/users_
* Send Header with **Key:** _x-access-token_ and **Value:**_<token>_ (Copied from authentication response)

## Roadmap
* Provide a user registration API endpoint with password hashing
* Authenticate Users against database instead of hard coded user account in app/user.js
* Create controllers and move various logic out of the routes
* Demonstrate PUT and other common API functions besides GET

### Author Note:
This project was built to demonstrate Node.js connectivity to an MS SQL database using Seriate. After looking into several options for SQL interaction within a Node.js environment, I chose Seriate for its simple implementation and native SQL query support. Please see this post for more information: http://developer.leankit.com/painless-sql-server-with-nodejs-and-seriate/

While NoSQL databases such as MongoDB are the trend in tutorials building out application interfaces such as this, many such systems implemented in existing business environments simply can't do away with MS SQL.