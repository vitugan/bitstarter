var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var file = fs.readFileSync('index.html', 'utf-8', function(err, data){
    if (err) throw err;
    console.log(data);
});

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
