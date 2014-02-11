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
  "/js/main.js"                                        : {'path':'client/js/main.js',                                       'type':'text/javascript'},
  "/app/Models/AppModel.js"                            : {'path':'client/app/Models/AppModel.js',                           'type':'text/javascript'},
  "/app/Views/AppView.js"                              : {'path':'client/app/Views/AppView.js',                             'type':'text/javascript'},
  "/app/Views/TopicCategoryView.js"                    : {'path':'client/app/Views/TopicCategoryView.js',                             'type':'text/javascript'},
  "/app/Views/ReportView.js"                           : {'path':'client/app/Views/ReportView.js',                             'type':'text/javascript'},
  "/js/app.js"                                         : {'path':'client/js/app.js',                                        'type':'text/javascript'},
  "/app/Models/Topic.js"                               : {'path':'client/app/Models/Topic.js',                              'type':'text/javascript'},
  "/app/Models/Topics.js"                              : {'path':'client/app/Models/Topics.js',                            'type':'text/javascript'},
  "/app/Models/Report.js"                              : {'path':'client/app/Models/Report.js',                            'type':'text/javascript'},
  "/app/Models/Reports.js"                              : {'path':'client/app/Models/Reports.js',                            'type':'text/javascript'},
  "/app/Models/TopicCategory.js"                       : {'path':'client/app/Models/TopicCategory.js',                            'type':'text/javascript'},
  "/app/Views/TopicView.js"                            : {'path':'client/app/Views/TopicView.js',                           'type':'text/javascript'},
  "/app/Views/TopicsView.js"                           : {'path':'client/app/Views/TopicsView.js',                          'type':'text/javascript'},
  "/css/bootstrap.css"                                 : {'path':'client/css/slate/bootstrap.css',                          'type':'text/css'},
  "/css/normalize.css"                                 : {'path':'client/css/normalize.css',                                'type':'text/css'},
  // "/css/bootstrap.css.map"                             : {'path':'client/css/bootstrap.css.map',                            'type':'text/css'},
  "/bower_components/backbone/backbone-min.js"         :  {'path':'client/bower_components/backbone/backbone-min.js',       'type':'text/javascript'},
  "/bower_components/backbone/backbone.js"             :  {'path':'client/bower_components/backbone/backbone.js',           'type':'text/javascript'},
  "/bower_components/backbone/backbone-min.map"         :  {'path':'client/bower_components/backbone/backbone-min.map',       'type':'text/javascript'},
  "/bower_components/backfire/backbone-firebase.min.js": {'path':'client/bower_components/backfire/backbone-firebase.min.js','type':'text/javascript'},
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

app.listen(3000);
console.log('Listening on port 3000');