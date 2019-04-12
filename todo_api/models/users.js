var mongoose = require("mongoose");
var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

module.exports = {User};


// var newUser = new User({
//     email:" hello@world.com "
// })
// newUser.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log(e);
// });