// var pr = new Promise((resolve,reject) =>{
//     setTimeout(()=> {
//         reject("rejected");
//     },2500)
    
// })
// pr.then((msg) =>{
//     console.log(msg);
// },(err)=>{
//     console.log(err);
// })

// var asyncAdd = (a,b)=>{
// return new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         if(typeof(a) === 'number' && typeof(b)==='number') resolve(a+b);
//         else(reject("improper Arguments"))
//     },1500)
// }).then((n)=>{console.log(n)},(err)=>{console.log(err)});
// }
// asyncAdd('a',3);
const request = require("request");
var geocode = (addr)=>{
    return new Promise((resolve,reject)=>{
        request({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(addr) + "&key=AIzaSyByu372YfRKcjhhlEYxCvTRjcx9PuRwPM0",
            json: true
        }, (error, response, body) => {
            if (error) reject("Can't connect now ,try again later.");
            else if (body.status === 'ZERO_RESULTS') reject("Wrong input");
            else if (body.status === 'OK') resolve( body.results[0].geometry.location);       
        })
    })
}

geocode('632014').then((loc)=>{console.log(JSON.stringify(loc))},(err)=>{console.log(err)});