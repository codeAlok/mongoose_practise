// ********* Main file for api mongoose *****************

const express = require('express');

require('./config');  // linking connection to mongoose

const product = require('./products');

const app = express();
app.use(express.json()); // convert string data into json

// ****** Post api with mongoose *******
app.post("/create", async (req, res)=>{
    let data = new product(req.body);
    let result = await data.save();

    console.log(result);
    console.log(req.body);
    res.send(result);
});

// ******** Get api with mongoose ******
app.get("/list", async (req, res)=>{
    let data = await product.find();

    res.send(data);
});

// ******** Delete api with mongoose ******
app.delete("/delete/:_id", async (req, res)=>{
    console.log(req.params);
    let data = await product.deleteOne(req.params);
    res.send(data);
    
});

// ******** Put api with mongoose **********
app.put("/update/:_id", async (req, res)=>{
    console.log(req.params);
    let data = await product.updateOne(req.params, {$set: req.body});
    res.send(data);
    
});

// ******** Search api **********
app.get("/search/:key", async (req, res)=>{
    console.log(req.params.key);
    let data = await product.find(
        {
            "$or":[
                {"name": {$regex: req.params.key}},
                {"stock": {$regex: req.params.key}}
            ]
        }
    );
    res.send(data);
});

app.listen(5000);