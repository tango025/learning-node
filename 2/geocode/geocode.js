const request = require("request");

var geocode = (addr,callback)=>{
    request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(addr) +"&key=AIzaSyByu372YfRKcjhhlEYxCvTRjcx9PuRwPM0",
    json:true
    },(error,response,body)=>{
        if(error) callback("Can't connect now ,try again later.");
        else if(body.status === 'ZERO_RESULTS') callback("Wrong input");
        else if(body.status === 'OK') 
        callback(undefined,body.results[0].geometry.location);
    })
}

module.exports = {geocode};
