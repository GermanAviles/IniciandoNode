'use strict';

// importación del modulo
const http = require('http').createServer(webServer),
    fs = require('fs');

function webServer(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./assets/index2.html', (err, data) => (err) ? console.log('Error ' + err.message) : res.end(data));
}

http.listen(3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/'));