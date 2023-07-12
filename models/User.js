const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio : {
        type: String,
        require: false,
        default : "Hey i am on Tikipop"
    },
    dp : {
        type : String,
        require: false,
    }
});
module.exports = mongoose.model("User", UserSchema);