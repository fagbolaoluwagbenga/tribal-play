var mongoose = require("mongoose");

var countrieSchema = new mongoose.Schema({

 name : String,
 code : String

});

var Countrie = mongoose.model("Countrie", countrieSchema);

module.exports = Countrie;

    