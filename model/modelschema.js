const mongoose = require ("mongoose");

const {Schema} = mongoose;

const StudentSchema= new Schema({

    studentfirstname: {
        type: String,
        require: true, 
    },
    collegeName:{
        type:String,
        require:true,

    },
    location: {
        type:String,
        require:true,
    },
      })


const StudentData = mongoose.model ('StudentData', StudentSchema)


module.exports= StudentData;
