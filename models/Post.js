const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    imgurl : {
        type: String,
        require: true
    }
});
module.exports = mongoose.model("Post", PostSchema);