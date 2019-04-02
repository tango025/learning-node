const request = require("request");
const yargs = require('yargs');
const axios = require("axios");

const argv = yargs
    .options({
        a:{
            demand:true,
            alias:"address",
            describe:"Address for lat and lang",
            string : true
        }
    })
    .help()
    .alias("help","h")
    .argv;
var encodedAddr = encodeURIComponent(argv.a);
var geocodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodedAddr+ "&key=AIzaSyByu372YfRKcjhhlEYxCvTRjcx9PuRwPM0";
axios.get(geocodeUrl).then((response)=>{
    if(response.data.staus === "ZERO_RESULTS")
        throw new Error('Unable to find that Address');
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/f5f8a153bd8fea6dcbc1a4bc7b5bfeca/${lat},${lng}`;
    console.log("formatted Address :"+ response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
})
.then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`Temp : ${temperature}F. Apparent Temp : ${apparentTemp}F.`)
})
.catch((e)=>{
    if(e.code==='ENOTFOUND') console.log("Invalid Input");
    else
        console.log(e.message);
})