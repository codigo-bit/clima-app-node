const axios = require('axios');

const getClima = async (latt, long) => {

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${long}&appid=c94e08e0bbdca3e3c92aa206ccb6479e&units=metric`)
    return resp.data.main.temp;

}

module.exports = {
    getClima
}