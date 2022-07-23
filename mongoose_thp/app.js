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
// collection creation
/* Mongoose model provides an interface to the database for creating, querrying, updating, deleteing records.  etc
*/

const PlayList = new mongoose.model("playlist", playListSchema);
