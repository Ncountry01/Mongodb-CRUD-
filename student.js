const    express = require( "express");
//const  StudentData  = require ("./model/classshema");
const StudentData = require('./model/modelschema')
const db = require ('./mongodb/connect');
const cors = require ('cors')




const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/studentDetail', async(req, res) => {

    const name= req.params.studentFirstname
    const result = await StudentData.find({name})

    res.send(result)
   // const resiult = req.body.params
   
})


app.post('/student', async(req, res) => {
    try{
  
        const studentData=new StudentData ({
            studentFirstname: req.body.studentFirstname,
            collegeName: req.body.collegeName,
            location:req.body.location

        })    
   
        const result = await studentData.save();
        res.status(201).send(result)
       //console.log(result)
    }
    
    
    catch{
        res.status(404).send("Page not found")
    }
})

app.listen(port, (req, res)=> {
    console.log(`server is riunning on this port ${port}`)
})