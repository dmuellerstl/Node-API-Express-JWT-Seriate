var express = require('express'),
    appRootDir = require('app-root-dir').get(),
    path = require('path'),
    middlewareAuth = require('../app/middleware');

var helpRoutes = function(){

    var helpRouter = express.Router();

    //Uncomment for Token Authorization required Access to Help Documentation Page
    //helpRouter.use(middlewareAuth); 

    // GET: /api/help
    helpRouter.route('/')
        .get(function(req,res){
        res.sendFile(path.join(appRootDir + '/help/index.html'));
        });
        
    return helpRouter;
}

module.exports = helpRoutes;