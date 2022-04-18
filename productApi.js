const express = require("express");
const ProductData= require( "./model/Productschema");
const mongodb= require ('./mongodb/connect');


const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/productDetail',async(req, res) => {
    
        const ProductName = req.params.productName
    const findData = await ProductData.find({ProductName})

   // console.log(finddata)
    res.send(findData)
    
})


app.post('/postproduct', async(req, res) => {
    try{
  
        const productAPI= new ProductData ({
            productName: req.body.productName,
            price: req.body.price,
            title:req.body.title

        })   
   
        const result = await productAPI.save();
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