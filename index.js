const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/firstDatabase");

    //schema => All fields are defined under this. only specified field + data types data can be filled in database rest will be blocked
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String
    });


// **** create/ saved in db model + schema *****
const saveInDb = async ()=>{
   
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


// ***** update data operation *******
const updateInDb = async ()=>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateOne(
        {name: "m10"},
        {
            $set: {price: 700, name: "realme ****"}
        }
    )
    console.log(data);
}

// updateInDb();

// ***** Delete data operation ********
const deleteInDb = async ()=>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.deleteOne(
        {name: 'Note NOte'}
    );
    console.log(data);
}

// deleteInDb();

// ********** Find data operation *******
const findInDb = async ()=>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.find({name: "realme 8"});
    console.log(data);
}

findInDb();