const request = require("request");

var getWeather = (lat,lng,callback)=>{
    request({
        url: `https://api.darksky.net/forecast/f5f8a153bd8fea6dcbc1a4bc7b5bfeca/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) callback(undefined,body.currently.temperature);
        else callback("bad request");
})
};
module.exports.getWeather = getWeather;