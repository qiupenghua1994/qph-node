// var express = require('express');
// var app = express();

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        ws.send('收到');
        console.log(message);
    });
});
//
// app.post('/root/test',function (req,res) {
//     res.send({name:'rest'});
//     console.log('test is ok');
// });
// app.post('/socketTest',function (req,res) {
//     console.log('socketTest is ok');
// });
//
// var server = app.listen(8080,function () {
//     var host = server.address().address;
//     var port = server.address().prot;
// });

console.log('service 8080 is ok');