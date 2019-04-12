var mongoose = require("mongoose");
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};

// var newTodo = new Todo({
//     text:'complete this folder by 4 pm'
// });

// newTodo.save().then((doc)=>{
//     console.log("successfully saved ",doc);
// },(e)=>{
//     console.log("error ",e);
// })