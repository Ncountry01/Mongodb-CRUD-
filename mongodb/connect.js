const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/QuoteAPIData")
.then(() => {
    console.log("Mongodb connection establish")
})
.catch((err)=> {
    console.log("connection failed", err)
})