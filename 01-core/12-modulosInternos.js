'use strict';
/**
 * Módulos (require / exports)
 * require("paquete o ruta")
        Importa módulos (paquetes, otros ficheros)
        Garantía: una única vez devuelve el módulo.
 * exports.propiedadPublica = <valor>
        El otro lado del mecanismo. Se puede exportar cualquier valor
 */

const reloj = require('./Clock'),
    midata = require('./my-data'),
    cucu = new reloj();

console.log(`Nombre: ${midata.name}, correo: ${midata.email}, Celular: ${midata.phone}`);
cucu.theTime();