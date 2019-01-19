'use strict';

const http = require('http');
const options = {
    host: 'jonmircha.com',
    port: 80,
    path: '/'
};

http.get((options, res) => console.log(`El sitio ${options.host} ha respondido. Código de estado: ${res.statusCode}`))
    .on('error', (err) => console.log(`El sitio ${options.host} no respondió. Código de estado: ${err.code}. Error ${err.message}`));