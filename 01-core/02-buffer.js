'use strict';

/** BUffer 
 *  Una tira de bytes (datos binarios)
    Similar a un array de enteros tamaño fijo
 * Manipular directamente datos:
 *      Sockets
 *      Streams
 *      Implementar protocolos complejos
 *      Manipulación de ficheros/imgs
 *      Criptografía 
*/
/**
 * Buffer() is deprecated due to security and usability issues. 
 * Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 */
let buf = new Buffer.alloc(26);

console.log(buf, buf.length, buf.toString());

for (let i = 0; i < buf.length; i++) {
    // 97 en ASCII es a
    buf[i] = i + 97;
}

console.log(buf.toString());