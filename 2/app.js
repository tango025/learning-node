const request = require("request");
const yargs = require('yargs');

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather") ;

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
geocode.geocode(argv.a,(error,results)=> {
    if(error) console.log(error)
    else{
        weather.getWeather(results.lat, results.lng, (error, weather) => 
        {
            (error) ? console.log(error) : console.log(weather);
        });
    }    
}) ; 
    
