 var mongoose = require("mongoose");
 var TvSeason = require("./tvSeason");

var seriesMovieSchema = new mongoose.Schema({

    series_id : {
        type: String, 
    },
    category: {
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
    seasons_count : {
        type: String, 
    },
    episode_count : {
        type: String, 
    },
    series_poster : {
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
    average_runtime:{
        type: Number,
    },
    video : {
        type: Boolean,
        default: true
    },

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
     ],

     tvSeasons: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TvSeason"
    }
]

});

var SeriesMovie = mongoose.model("SeriesMovie", seriesMovieSchema);

module.exports = SeriesMovie;
