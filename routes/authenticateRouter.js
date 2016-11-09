//TODO: Authenticate User Against DB Instead of Hardcoded User in /app/user.js
var express = require('express'),
    jwt = require('jsonwebtoken'),
    User = require('../app/user'),
    config = require('../config'),
    app = express();

var authenticateRouter = function(){

  var authRouter = express.Router();

  // POST: /api/authenticate/  -- authenticates the user and returns token
  authRouter.post('/', function(req, res) {

      if (req.body.name != User.name) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else {

        // check if password matches
        if (req.body.password != User.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
          
          // if user is found and password is right
          // create a token
          var token = jwt.sign(User, config.secret, {
            expiresIn: '30m' // token expires in 30 minutes, can be days like 100d, etc.
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }   

      }

    });

    return authRouter;
}


module.exports = authenticateRouter;