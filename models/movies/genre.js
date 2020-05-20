var mongoose = require("mongoose");

var genreSchema = new mongoose.Schema({
    //  genres
    drama : {
        type: Boolean,
        default: false
    },

    comedy : {
        type: Boolean,
        default: false
    },
    action : {
        type: Boolean,
        default: false
    },
    romance : {
        type: Boolean,
        default: false
    },
    horror : {
        type: Boolean,
        default: false
    },
    fantasy : {
        type: Boolean,
        default: false
    },
    scifi : {
        type: Boolean,
        default: false
    },

    thriller : {
        type: Boolean,
        default: false
    },
    western : {
        type: Boolean,
        default: false
    },
    adventure : {
        type: Boolean,
        default: false
    },
    animation : {
        type: Boolean,
        default: false
    },
    documentry : {
        type: Boolean,
        default: false
    },

});

var Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;