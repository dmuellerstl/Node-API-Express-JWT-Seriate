var express = require('express'),
    bodyParser = require('body-parser'),
    appRootDir = require('app-root-dir').get(),
    path = require('path');

var app = express();
var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Setup Routes
authenticateRouter = require('./routes/authenticateRouter')();
helpRouter = require('./routes/helpRouter')();
userRouter = require('./routes/userRouter')();

app.use('/authenticate', authenticateRouter);
app.use('/api/help', helpRouter);
app.use('/api/users', userRouter);


// Default API Landing Page
app.get ('/', function(req, res){
    res.sendFile(path.join(appRootDir + '/views/index.html'));
});

app.listen(port, function(){
    console.log('Gulp is Running on port :' + port);
});
