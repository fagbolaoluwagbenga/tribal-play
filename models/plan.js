var mongoose = require("mongoose");

var planSchema = new mongoose.Schema({

 name : String,

});

var Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;

    