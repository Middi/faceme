const ss = require('socket.io-stream');
const path = require('path');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');

io.on('connection', socket => {
    console.log('connection');
    socket.emit('connected', 'hello World');

    ss(socket).on('file', (stream, data) => {
        console.log(stream)
    });

    ss(socket).on('video', (stream, data) => {
        console.log(stream);
        // stream.pipe(fs.createWriteStream( 'video' + Date.now() +'.txt'));
    });

});

app.use((req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

server.listen(3000);