// In this router we will get some user info and return it to the request if the token is provided
var express = require('express'),
middlewareAuth = require('../app/middleware'),
sql = require('../app/database');

var userRoutes = function(){

    var userRouter = express.Router();

    userRouter.use(middlewareAuth); //Require Token for all Routes on this Router

    // GET: /api/users
    userRouter.route('/')
        .get(function(req,res){
            sql.execute({  
                query: sql.fromFile( "../sql/getUsers" )
            }).then( function( results ) {
                if(results.length > 0){
                    res.json(results);
                } else {
                    res.send("No Users Found");
                }              
            }, function( err ) {
                console.log( "Something bad happened:", err );
            });
        });

    // GET: /api/users/bsmith
    userRouter.route('/:UserName')
        .get(function(req,res){
            
            sql.execute({  
                    query: sql.fromFile( "../sql/getUserByLogin" ),
                    params: {
                        userName: {
                            type: sql.NVARCHAR,
                            val: req.params.UserName
                        }
                    }
                }).then( function( results ) {
                    if(results.length > 0){
                        var user = {
                            FirstName : results[0].fname,
                            LastName : results[0].lname
                        }
                        res.json( user );
                    }
                    else{
                        res.send('User Not Found');
                    }
                }, function( err ) {
                    console.log( "Something bad happened:", err );
                });
        });
        
    return userRouter;
}

module.exports = userRoutes;