const express =require('express')
const app = express();
const QuoteAPIData = require('./model/QouteSchema')
const db = require('./mongodb/connect')
const port = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/getquote', async(req, res) => {
        //const author = req.body.author
        //const quote = req.params.quote
    const quotes= req.params.quote
    const findData = await QuoteAPIData.find({quotes})
    res.status(201).send(findData)
    //console.log(findData)    

})


app.post('/quote', async(req, res) => {
    try{
  
        const quoteApi= new QuoteAPIData ({
            quote: req.body.quote,
            author: req.body.author,

        } )   
   
        const result = await quoteApi.save();
        res.status(201).send(result)
      // console.log(result)
    }
    
    
    catch{
        res.status(404).send("Page not found")
    }
})

app.listen(port, (req, res)=> {
    console.log(`server is riunning on this port ${port}`)
})