const mongoose = require('mongoose');


// **** create/ saved in db model + schema *****
const saveInDb = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/firstDatabase");

    //schema => All fields are defined under this. only specified field + data types data can be filled in database rest will be blocked
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String
    });

    // model => by using schema , it connect mongodb to nodeJs

    const productModel = mongoose.model('products', productSchema);

    // let data = new productModel({name: "m10", price: 1000});
    let data = new productModel(
        {
            name: "Note NOte",
            price: 50,
            brand: "Temporary",
            category: "Rupee"
        });

    let result = await data.save();
    console.log(result);
}

// saveInDb();

