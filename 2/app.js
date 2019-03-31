const request = require("request");
const yargs = require('yargs');

const geocode = require("./geocode/geocode")

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
geocode.geocode(argv.a) ; 
    