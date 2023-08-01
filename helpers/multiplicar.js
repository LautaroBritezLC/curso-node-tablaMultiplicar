const fyleSistem = require('fs');
const colors = require('colors');
const crearArchivoTabla = async (base = 5 , listar = false , hasta = 10) =>{
    try {
        let salida = '';
        for(i = 1; i<=hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        
        if (listar) {
            console.log('======================'.white);
            console.log(`    tabla del ${colors.green(base) }`);
            console.log('======================'.white);
            console.log(salida);
        }else {
            console.log('para que liste la tabla tiene que poner -l')
        }
        
        
        //crea un archivo txt en el mismo directorio donde estamos parados
        fyleSistem.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivoTabla
}