const request = require("request");

var geocode = (addr)=>{
    request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(addr) +"&key=AIzaSyByu372YfRKcjhhlEYxCvTRjcx9PuRwPM0",
    json:true
    },(error,response,body)=>{
        if(error) console.log("Can't connect now ,try again later.");
        else if(body.status === 'ZERO_RESULTS') console.log("Wrong input");
        else if(body.status === 'OK') 
        console.log(JSON.stringify(body.results[0].geometry.location,undefined,2));
    })
}

module.exports = {geocode};