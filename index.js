const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/firstDatabase");

    //schema => All fields are defined under this. only specified field + data types data can be filled in database rest will be blocked
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number
    });

    // model => by using schema , it connect mongodb to nodeJs

    const productModel = mongoose.model('products', productSchema);

    let data = new productModel({name: "m10", price: 1000});
    let result = await data.save();

    console.log(result);

}

main();