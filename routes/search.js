var express = require("express");
var router = express.Router();
var request = require("request");
var User = require("../models/user");
var SearchController = require("../controllers/search");

// getting search result
router.get("/results",isLoggedIn, SearchController.get_search_results );


//  getting a specific searched result via id
router.get("/results/:id",isLoggedIn, SearchController.get_specific_search_result);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  }

module.exports = router;