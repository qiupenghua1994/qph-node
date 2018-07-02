var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello');
});
server.listen(8080);

server.on('upgrade', function (req, socket, upgradeHead) {
    console.log(1);
    var key = req.headers['sec-websocket-key'];
    key = crypto.createHash("sha1").update(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest("base64");
    var headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        'Sec-WebSocket-Accept: ' + key
    ];
    socket.setNoDelay(true);
    socket.write(headers.join("\r\n") + "\r\n\r\n", 'ascii');
    var ws = new WebSocket(socket);
    webSocketCollector.push(ws);
    callback(ws);
});
console.log(111111);