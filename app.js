const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log( process.argv );
console.log( argv );
// console.log( 'base: yargs ',argv.b );

//para obtener el numero de la base
//para la forma con promesa
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo=> console.log(nombreArchivo.rainbow, 'creado'))//.rainbow:añadiendo color
    .catch(err=>console.log(err));



//funcionaba si lo de abajo no se hubiera puesto
// const base=1;


//Modo para ingresar la base desde consola
// console.log(process.argv);
//process.argv: argumentos que viene de la consola
//para tomar solo el argumento 3
// const [ , , arg3='base=5']=process.argv;
// console.log(arg3);

//para obtener el numero de la base
// const [ , base = 5 ]=arg3.split('=');//.split('='): para separar desde el igual
// console.log(base);


//para obtener el numero de la base
//Para la forma normal
// crearArchivo(base);


//para obtener el numero de la base
//para la forma con promesa
//crearArchivo(base)
    // .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
    // .catch(err=> console.log(err));


