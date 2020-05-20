var mongoose = require("mongoose");

var tvEpisodeSchema = new mongoose.Schema({

    episode_id : {
        type: Number, 
    },
    episode_number : {
        type: Number, 
    },
    episode_title : {
        type: String, 
    },
    image_path : {
        type: String, 
    },
    video_path : {
        type: String
    },
    category : {
        type: String, 
    },

});

var TvEpisode = mongoose.model("TvEpisode", tvEpisodeSchema);

module.exports = TvEpisode;

    