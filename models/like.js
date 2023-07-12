const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    pid: {
        type: String,
        required: true
    },
    Uid: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Like", LikeSchema);