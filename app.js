const {crearArchivoTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();
//-----forma de obtener el argumento (base) sin el yargs-----
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

crearArchivoTabla(argv.base,argv.listar , argv.hasta)
.then(nombreArchivo =>{
    console.log( `el archivo ${nombreArchivo} se creo correctamente` .bgYellow);
})
.catch(err =>{
    console.log(err , "sucedio un error");
})




