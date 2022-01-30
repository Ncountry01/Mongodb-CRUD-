/** Creating connection with mongodb START */

const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/AssignmentAPI") 
.then (() =>console.log ("Connection is Successful..."))
.catch((err) => console.log(err));


/** Creating connection with mongodb END */

/**  Schema SETUP - START */
 const SuperHeroSchema  = new mongoose.Schema({

    /**Name Validation --START */
name:{
    type:String,
    required:true,
    unique:true,
    
},
 /**Name Validation --END */

  /**Image Validation --START */
image:{
    type:Number || String,
    require:true,
},
 /**Image Validation --END */


/**Summary Validation --START */
summary:{
    type: String,
},
 /**Summary Validation --START */

 /**Date Validation --START */
 date:{
    type:Date,
    default:Date.now,
},
 /**Date Validation --END */
});

/**  Schema SETUP - END */

/**Model Set-Up and Collection Creation */
const SuperHero =new mongoose.model('SuperHero', SuperHeroSchema);

/**(Create) Document Creation in mongodb(database) -> Start*/

const createDocument = async () => {
    try{
const HarryPotter= new SuperHero({
    name: "Harry Potter and the Order of the Phoenix",
img: "https://bit.ly/2IcnSwz",
summary: "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry."
});
const RingMaster = new SuperHero({
name: "The Lord of the Rings: The Fellowship of the Ring",
img: "https://bit.ly/2tC1Lcg",
summary: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
});
const Avengers = new SuperHero({
name: "Avengers: Endgame",
img: "https://bit.ly/2Pzczlb",
summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."

});

//insert many document
const result= await SuperHero.insertMany([HarryPotter, RingMaster, Avengers]);
console.log(result);
    }catch(err) {
        console.log(err)
    }
}
//createDocument(); 

/**
const Endgame = new SuperHero ({
    name: " Endgame",
    img: "https://bit.ly/2Pzczlb",
    summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    
    });
 //insert one document
// Endgame.save();
 console.log(Endgame);
 */

/**(Create) Document Creation in mongodb(database) -> END*/



/**Reading of MongoDB data --Start */
const getSuperHeroData = async () => {
    try{
        const result= await SuperHero
        //.find({name: "Harry Potter and the Order of the Phoenix"}) // Retrive document according to given data
        .find ({$or: [{name:"Harry Potter and the Order of the Phoenix"},{name:"Avengers: Endgame"}]})  // Using Boolean algebra
        .select({name:1}) //Retrive single data from mongoose document
        .limit(1) //limit setup
        console.log(result);
    }catch(err) {
        console.log(err);
    }
}
//getSuperHeroData()

/**Reading of MongoDB data --END */


/**Updating of MongoDB data --START */
const UpdateDocument = async (_Id) =>{
    try{
        const result = await SuperHero.updateOne({_Id},
            {
        $set:{
            name:"HARRY POTTER and the Order of the PHONIX "
        }
    });
        console.log(result)
    }catch(err) {
        console.log(err)
    }
}
//UpdateDocument("61f4fb0c7034a07d64022341")

/**Updating of MongoDB data --END */



/**Find and Update operation of MongoDB data --START */
const getdocument = async (_id) => {
    try {
        const result= await SuperHero.findByIdAndUpdate({_id},{
         $set: {
             name : "Harry Potter and the Order of the Phonix"
         }   
        });
        console.log(result)
    }catch(err){
        console.log(err);
    }
}
//getdocument("61f4fb0c7034a07d64022341");

/**Find and Update operation of MongoDB data --END */



/**Delete Document--START */

const deletedocument = async (_id) => {
    try{
        //const result = await SuperHero.deleteOne({_id :"61f511812e29e68be6b6a10c" })
        const result = await SuperHero.deleteMany({_id})
        console.log(result);
    }catch(err) {
        console.log(err)
    }
}
deletedocument(("61f5149da780492a71e75c50"),("61f4fb0c7034a07d64022343"));
/**Delete Document--END */