 var mongoose = require("mongoose");
 var Post = require("../post")

var newMovieSchema = new mongoose.Schema({

    movie_id : {
        type: String, 
    },
    category : {
        type: String, 
    },
    title : {
        type: String, 
    },
    overview : {
        type: String,
    },
    image_path : {
        type: String, 
    },
    release_date : {
        type: String
    },
    video_path : {
        type: String, 
    },
    movie_poster : {
        type: String
    },
    director : {
        type: String
    },
    pg : {
        type: Number
    },

    vote_average : {
        type: String
    },
    runtime:{
        type: Number,
    },
    video : {
        type: Boolean,
        default: true
    },
    // genre : [genreSchema]
    //image_poster
    //director
    author : {
        id:{
             type: mongoose.Schema.Types.ObjectId,
             ref: "User"
        },
        username : String, 
    },
    
     posts: [
         {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Post"
         }
     ]
});

var NewMovie = mongoose.model("NewMovie", newMovieSchema);

module.exports = NewMovie;
