'use strict';

/** Streams
 *  'Chorros' de información que se transmiten en 'pedazos' (chucks)
 *  3 tipos: Lectura / Escritura / Duplex
 *  Instancias del EventEmitter
 *  Acceso Asincrono
 *  Es raro crear streams directamente, pero muchos recursos nos ofrecen este interfaz
 *  detrás de muchos mecanismos de Node
 *      stdin/stdout
 *      request HTTP
 *      Sockets
 *      Manipulacion de ficheros / imgs
 */

// llamamos al modulo de file system
const fs = require('fs');
// Documentación: https://nodejs.org/api/fs.html
let readStream = fs.createReadStream('./assets/nombres.txt'),
    writeStream = fs.createWriteStream('./assets/nombrescopia.txt');

readStream.pipe(writeStream);
readStream.on('data', (chunk) => {
        console.log(chunk);
        console.log(chunk.toString());
        console.log('He leido: ' + chunk.length + ' Caracteres');
    })
    .on('end', () => console.log('Terminé de leer el archivo'))
    .on('error', (error) => console.log('Ha ocurrido un error ' + error.message));