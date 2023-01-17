const mongoose = require("mongoose");

var user = "admin";
var pass = "SRBW1TgJfCgLyVOi";

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://'+user+':'+pass+'@msc.xlj0pyh.mongodb.net/coveicydet', {
    useNewUrlParser: true
})
    .then(db => console.log('Database is Connected'))
    .catch(err => console.log(err))