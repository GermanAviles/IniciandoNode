'use strict';

(function singleThread() {

    process.argv[2] = 'Estamos aprendiendo NodeJS';
    process.argv[3] = 4;
    process.argv[4] = null;
    process.argv[5] = true;

    console.log('------------------------------------------------------------------');
    console.log('                EL PROCESO DE NODE.JS              ');
    console.log('Id del proceso ................ ' + process.pid);
    console.log('Titulo ........................ ' + process.title);
    console.log('Directorio de node ............ ' + process.execPath);
    console.log('Directorio Actual ............. ' + process.cwd());
    console.log('Version de Node ............... ' + process.version);
    console.log('Versiones Dependencias ........ ' + process.versions);
    console.log('Plataforma (S.O.) ............. ' + process.platform);
    console.log('Arquitectura (S.O.) ............ ' + process.arch);
    console.log('Tiempo activo de Node ......... ' + process.uptime());
    console.log('Argumentos del proceso ........ ' + process.argv);
    console.log('------------------------------------------------------------------');

})();