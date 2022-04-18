import mongoose from "mongoose";

const {Schema} = mongoose;


class StudentSchema extends Schema {
    constructor(){ 
        super({
    studentFirstName: {
        type:String,
        require:true
    },
    collegeName: {
        type:String,
        require:true
    },
    location: {
        type:String,
        require:true
    },
})
}
}


 export default mongoose.model('StudentDatas', new StudentSchema)
