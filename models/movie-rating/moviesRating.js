var mongoose = require("mongoose");

var moviesRatingSchema = new mongoose.Schema({
    
    title : {
        type: String, 
    },
    overview : {
        type: String,
    },
    likes_count : {
        type: Number, 
    },
    release_date : {
        type: String
    },
    likes_ids:[],
    image_path : {
        type: String, 
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
    present_position : {
        type: Number,
    },
    previous_position : {
        type: Number,
    },
    vote_average : {
        type: String
    },
    runtime:{
        type: Number,
    },
    genre:{
        type: String,
    },
    video : {
        type: Boolean,
        default: true
    },
    date: { type: Date, default: Date.now },
});

var MoviesRating = mongoose.model("MoviesRating", moviesRatingSchema);

module.exports = MoviesRating;
