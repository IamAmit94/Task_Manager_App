const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Task-Manager-Api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})