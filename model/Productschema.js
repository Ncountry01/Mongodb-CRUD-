const mongoose= require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true 
    },
    price:{
        type:Number,
        require:true,

    },
    title: {
        type:String,
        require:true,
    },
})


const ProductData =new mongoose.model('ProductData', ProductSchema);

module.exports= ProductData;