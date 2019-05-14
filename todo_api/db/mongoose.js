var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var url = process.env.MONGO_URI || "mongodb://localhost:27017/TodoApp";
mongoose.connect(url, { useNewUrlParser: true });

module.exports = {mongoose};