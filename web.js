var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
    var fs = require('fs');
    var file = './index.html';
    var buffer = new Buffer(512);
    var buff = buffer.write(fs.readFileSync(file));
    buf.toString("utf-8");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
