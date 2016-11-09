# Node-API-Express-Passport-Seriate
After a lot of research and testing, I present you with... da-dada-da: A Node.js, Express API with Passport for JWT Token Authentication and Seriate for MS SQL Database Integration

# Dependencies
See packages.json

# Setup
* Clone the repository
* Navigate to the repository and run npm init
* Use the nodeapi.sql create script to create the SQL database

# API Usage
* Run the API with node app.js or gulp from the repository root
* To obtain a token, **POST** to _http://localhost:3000/authenticate_
* Send Header with **Key:** _Content-Type_ and **Value:** _application/x-www-form-urlencoded_ 
* Send Body values (application/x-www-form-urlencoded) **Key:** _name_ and **Value:** _apiuser_, **Key:** _password_ and **Value:** _apipassword_
* You should receive a token back in the response. Copy the token value and use it in subsequent API requests
* **GET** to _http://localhost:3000/api/users_
* Send Header with **Key:** _x-access-token_ and **Value:**_<token>_ (Copied from authentication response)



