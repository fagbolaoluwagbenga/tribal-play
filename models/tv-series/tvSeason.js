var mongoose = require("mongoose");
var TvEpisode = require("./tvEpisode");
// var episodeSchema = new mongoose.Schema({
//     episode_id : {
//         type: Number, 
//     },
//     episode_number : {
//         type: Number, 
//     },
//     episode_title : {
//         type: String, 
//     },
//     image_path : {
//         type: String, 
//     },
//     video_path : {
//         type: String
//     },
//     episode_runtime : {
//         type: Number, 
//     },

// });  

// var Episode = mongoose.model("Episode", episodeSchema);


var tvSeasonSchema = new mongoose.Schema({
   
    // episodes : {
    //     id:{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "SeriesMovie"
    //     },
    
    // },
    season_id : {
        type: String, 
    },
    episode_count : {
        type: String, 
    },
    season_number : {
        type: Number, 
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
   // episodes: [episodeSchema]
   tvEpisodes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "TvEpisode"
    }]
});

var TvSeason = mongoose.model("TvSeason", tvSeasonSchema);
module.exports = TvSeason;