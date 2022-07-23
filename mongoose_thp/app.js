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

// **Through async/await **
const createDocument = async () => {
    try {
        const reactPlaylist = new PlayList({
            name: "React Js",
            ctype: "Front End",
            videos: 40,
            author: "Alok Kumar",
            active: true,
        });

        const result = await reactPlaylist.save();
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
};

createDocument();