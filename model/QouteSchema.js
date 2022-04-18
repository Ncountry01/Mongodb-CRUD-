const mongoose= require('mongoose')

const QuoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        require: true, 
    },
    author:{
        type:String,
        require:true,

    },
})


const QuoteAPIData =new mongoose.model('QuoteData', QuoteSchema);

module.exports= QuoteAPIData;
