// const { throws } = require('assert/strict');
const fs = require('fs');//requerir el filesystem
const colors = require('colors');

//modo  normal
// const crearArchivo = (base=5) =>{
//     console.log('==========');
//     // console.log(`Tabla del ${base}`)
//     console.log('Tabla del', base);
//     console.log('==========');

//     let salida = '';

//     for(let i=1; i<11; i++){
//     salida += `${base} x ${i} = ${base * i} \n`;
//     }
//     fs.writeFileSync(`tabla-${base}.txt`,salida);
//     console.log(`La tabla del ${base} creado`);
// }

//modo con promesa
// const crearArchivo = (base=5) =>{
    // console.log('==========');
    // console.log('Tabla del', base);
    // console.log('==========');        
    // let salida = '';
    // for(let i=1; i<11; i++){
    //     salida += `${base} x ${i} = ${base * i} \n`;
    // }
    // fs.writeFileSync(`tabla-${base}.txt`,salida);
    // resolve(`La tabla del ${base}.txt`); 
// }

//modo con async
const crearArchivo = async(base=5, listar=false, hasta=10) =>{    
    try {
        let salida = '';
        let consola ='';

        for(let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${'x'.red.italic} ${i} ${'='.green} ${base * i} \n`;
        }

        if(listar===true){
            console.log('============='.green);
            console.log('Tabla del'.green, colors.blue(base));
            console.log('============='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `La tabla del ${base}.txt`;           
    } catch (err) {
        throw err;
    }
    
}

//para exportar el erchivo, en este caso la funcion
module.exports = {
    crearArchivo: crearArchivo
}


//writefile
// fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
//     if (err) throw err;
//     console.log(`La tabla del ${base} creado`);
// })
//writefilesync--codigo mas simple
// fs.writeFileSync(`tabla-${base}.txt`,salida);
// console.log(`La tabla del ${base} creado`);