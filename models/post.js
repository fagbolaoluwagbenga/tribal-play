var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({

   author : {
       id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
       },
       username : String, 
   },
   content : String, 
   date: { type: Date, default: Date.now },
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;

    