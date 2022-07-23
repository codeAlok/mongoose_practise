const mongoose = require('mongoose');

//connecting Database and/or creating a new Database
mongoose.connect("mongodb://localhost:27017/second");


//***** Schema ******/
const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});


// ******** Model *****
/* Mongoose model provides an interface to the database for creating, querrying, updating, deleteing records.  etc
*/

//collection creation
const PlayList = new mongoose.model("playlist", playListSchema);


// *** create document or insert ***
// normally

// const reactPlaylist = new PlayList({
//     name: "React Js",   
//     ctype: "Front End",
//     videos: 40,
//     author: "Alok Kumar",
//     active: true,
// });

// reactPlaylist.save();  //takes time to save so, handle through async/await

// ** Through async/await **
const createDocument = async () => {
    try {
        const reactPlaylist = new PlayList({
            name: "React Js",
            ctype: "Front End",
            videos: 40,
            author: "Alok Kumar",
            active: true,
        });
        const jsPlaylist = new PlayList({
            name: "Javascript",
            ctype: "Front End",
            videos: 100,
            author: "Alok Kumar",
            active: true,
        });
        const mongodbPlaylist = new PlayList({
            name: "Mongodb",
            ctype: "Database",
            videos: 6,
            author: "Alok Kumar",
            active: true,
        });
        const mongoosePlaylist = new PlayList({
            name: "Mongoose",
            ctype: "Database",
            videos: 13,
            author: "Alok Kumar",
            active: true,
        });

        const result = await PlayList.insertMany([reactPlaylist, jsPlaylist, mongodbPlaylist, mongoosePlaylist]);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
};

// createDocument();


// **** Read Document ****
const getDocument = async () =>{
    // const result = await PlayList.find({ctype: "Database"}); //similar data

    // const result = await PlayList.find({ctype: "Database"}).select({name: 1}); //only name with id

    const result = await PlayList.find({ctype: "Database"}).select({name: 1}).limit(1); //only one data (name with id)

    console.log(result);
}

// getDocument();


// **** Search through query operator ****
// Google => comparision Query operator for more

const queryDocument = async () =>{
    try{
        // const result = await PlayList.find({videos: {$gt : 50}}); // videos > 50
        // const result = await PlayList.find({videos: {$lte : 50}}); // videos <= 50

        const result = await PlayList.find({ctype: {$in : ["Back End", "Database"]}}); // shows collection which matches any of them

        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

// queryDocument();


// **** Logical Query operator ****
// !!! Google => for more
// Mongodb Query is used  in Mongoose also 
const logicalQueryDoc = async () => {
    try{
        // const result = await PlayList.find({$or : [ {ctype: "Back End"}, {author: "Alok Kumar"} ]});

        const result = await PlayList.find({$and : [ {ctype: "Front End"}, {author: "Alok Kumar"} ]});

        console.log(result);
    }
    catch(err){
        console.log(err);
    }
};

logicalQueryDoc();
