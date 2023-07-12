const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    pid: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Comment", CommentSchema);