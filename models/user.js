var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: { type: String, lowercase: true },
    fullname: String,
    email: { type: String, unique: true, required: true, lowercase: true },
    plan: { type: String, default: "free" },
    googleId: String,
    facebookId: String,
    facebookToken: String,
    twitterId: String,
    picture: String,
    password: String,
    confirmpassword: String,
    location: String,
    provider: String,
    movies_liked: [],
    firstName: String,
    lastName: String,
    createdDate: { type: Date, default: Date.now },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    profile_pic: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);