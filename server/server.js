var express = require('express');
var app = express();
// var ip = "127.0.0.1";

app.configure(function(){
  app.use(express.static(__dirname + '/'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var routes = {
  "/"                                                  : {'path':'client/index.html',                                       'type':'text/html'},
  "/index.html"                                        : {'path':'client/index.html',                                       'type':'text/html'},
  "/img/bg1_d.png"                                     : {'path':'client/img/bg1_d.png',                                       'type':'image/png'},
  "/img/bg1.jpg"                                       : {'path':'client/img/bg1.jpg',                                       'type':'image/jpg'},
  "/templates/reports_template.html"                   : {'path':'client/templates/reports_template.html',                  'type':'text/html'},
  "/fonts/glyphicons-halflings-regular.woff"           : {'path':'client/fonts/glyphicons-halflings-regular.woff',         'type':'font/opentype'},
  "/fonts/glyphicons-halflings-regular.ttf"            : {'path':'client/fonts/glyphicons-halflings-regular.ttf',          'type':'font/opentype'},
  "/fonts/glyphicons-halflings-regular.svg"            : {'path':'client/fonts/glyphicons-halflings-regular.svg',          'type':'image/svg+xml'},
  "/js/app.js"                                         : {'path':'client/js/app.js',                                    'type':'text/javascript'},
  "/bower_components/angular/angular.min.js.map"       : {'path':'client/bower_components/angular/angular.min.js.map',       'type':'text/javascript'},
  "/bower_components/angular/angular.js"               : {'path':'client/bower_components/angular/angular.js',               'type':'text/javascript'},
  "/js/angular-route.js"                               : {'path':'client/js/angular-route.js',                              'type':'text/javascript'},
  "/css/bootstrap.css"                                 : {'path':'client/css/slate/bootstrap.css',                          'type':'text/css'},
  "/css/bootstrap.css.map"                             : {'path':'client/css/bootstrap.css.map',                            'type':'text/css'},
  "/bower_components/underscore/underscore-min.js"     : {'path':'client/bower_components/underscore/underscore-min.js',    'type':'text/javascript'},
  "/bower_components/underscore/underscore-min.map"    : {'path':'client/bower_components/underscore/underscore-min.map',   'type':'text/javascript'},
  "/bower_components/jquery/jquery.min.js"             : {'path':'client/bower_components/jquery/jquery.min.js',            'type':'text/javascript'},
  "/bower_components/jquery/jquery.min.map"            : {'path':'client/bower_components/jquery/jquery.min.map',           'type':'text/javascript'}
};

app.get('*', function(req,res){
    console.log(req.url);
    if (routes[req.url] === undefined){
      res.status(404);
      res.end();
    } else {
        var contentType = routes[req.url]['type'];
        var resPath = routes[req.url]['path'];
        console.log(contentType);
        console.log(resPath);
        res.status(200);
        res.header("Content-Type : " + contentType);
        res.sendfile(resPath);
      }
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});