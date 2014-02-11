var express = require('express');
var app = express();

var port = 8080;
var ip = "127.0.0.1";

app.configure(function(){
  app.use(express.static(__dirname + '/'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var routes = {
  "/"                                                  : {'path':'client/index.html',                                       'type':'text/html'},
  "/index.html"                                        : {'path':'client/index.html',                                       'type':'text/html'},
  "/server/app.js"                                     : {'path':'server/app.js',                                           'type':'text/javascript'},
  "/css/bootstrap.css"                                 : {'path':'client/css/slate/bootstrap.css',                                'type':'text/css'},
  "/css/normalize.css"                                 : {'path':'client/css/normalize.css',                                'type':'text/css'},
  // "/css/bootstrap.css.map"                             : {'path':'client/css/bootstrap.css.map',                            'type':'text/css'},
  "/bower_components/underscore/underscore-min.js"     : {'path':'client/bower_components/underscore/underscore-min.js',    'type':'text/javascript'},
  "/bower_components/underscore/underscore-min.map"    : {'path':'client/bower_components/underscore/underscore-min.map',   'type':'text/javascript'},
  "/bower_components/jquery/jquery.min.js"             : {'path':'client/bower_components/jquery/jquery.min.js',            'type':'text/javascript'},
  "/bower_components/jquery/jquery.min.map"            : {'path':'client/bower_components/jquery/jquery.min.map',           'type':'text/javascript'}
};

app.get('*', function(req,res){
    console.log(req.url);
    var contentType = routes[req.url]['type'];
    var resPath = routes[req.url]['path'];
    console.log(contentType);
    console.log(resPath);
    res.status(200);
    res.header("Content-Type : " + contentType);
    res.sendfile(resPath);
});

app.listen(3000);
console.log('Listening on port 3000');