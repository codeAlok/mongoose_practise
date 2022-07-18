// ********* Main file for api mongoose *****************

const express = require('express');

require('./config');  // linking connection to mongoose

const product = require('./products');

const app = express();
app.use(express.json()); // convert string data into json

app.post("/create", async (req, res)=>{
    let data = new product(req.body);
    let result = await data.save();

    console.log(result);
    console.log(req.body);
    res.send(result);
});

app.listen(5000);