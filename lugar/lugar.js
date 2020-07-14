
const axios = require('axios');


const getLugarLatLong = async ( direccion ) => {

const encodedUrl = encodeURI(direccion); 

const instance = axios.create({
  baseURL: `https://geocode.xyz/${encodedUrl}?json=1`,
  headers: {'X-Custom-Header': 'foobar'}
});

 const resp = await instance.get();
   if(resp.data.length === 0) {
        throw Error(`no hay respuesta para ${direccion}`);
   }
   
const city = resp.data.standard.city;
const long = resp.data.alt.loc.longt;
const latt = resp.data.alt.loc.latt;

return {
  
    city,
    long, 
    latt

}
}

module.exports = {
    getLugarLatLong
}