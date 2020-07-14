const axios = require('axios');
const lugar = require ('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'direccion de la ciudad para obtener clima',
        demand: true
    }
}).argv;

 const getInfo = async ( direccion ) => {

    try{
        const coords = await lugar.getLugarLatLong( direccion );
        const temp = await clima.getClima(coords.latt, coords.long);
        return `El clima de ${coords.city} es de ${temp} grados centigrados` ;
    }catch(e){
        return `no se pudo determinar la temperatura de ${direccion}`
    }
    
 }

 getInfo(argv.direccion)
   .then(console.log)
   .catch(console.log);


    