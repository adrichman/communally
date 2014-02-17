var express = require('express');
var app = express();
// var ip = "127.0.0.1";

app.configure(function(){
  app.use(express.static('./client'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});