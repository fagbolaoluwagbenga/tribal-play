var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var AdminSchema = new mongoose.Schema({
 username : {type: String, required:true},
 email : {type: String,  required:true},
 password : String,
 confirmpassword : String,
 resetPasswordToken: String,
 resetPasswordExpires: Date,
});

AdminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Admin", UserSchema);
