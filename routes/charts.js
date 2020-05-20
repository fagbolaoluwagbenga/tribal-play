var express = require("express");
var router = express.Router();
var MoviesRating = require("../models/movie-rating/moviesRating");
var User = require("../models/user");

// router.get("/chartss", function(req, res, next) {
//   res.render("charts");
// });
router.get("/charts", function(req, res, next) {
  res.render("charts-soon");
});
// router.get("/chartsartist", function(req, res, next) {
//   res.render("artistchart");
// });

// router.get("/testme", function(req, res, next) {
//   res.render("testme");
// });

router.get("/charts-movie", function(req, res) {
  MoviesRating.find({}, function(err, moviesratings) {
    if (err) {
      console.log("ERROR!!!");
    } else {
      res.render("movies-chart", { moviesratings: moviesratings, user: req.user });
    }
  });
});

router.post("/charts-movie/:id", function(req, res) {
  MoviesRating.findById(req.params.id, function(err, moviesrating) {
    if (err) {
      console.log(err);
    } else {
      moviesrating.likes_count += 1;
      moviesrating.save();
      console.log(moviesrating.likes_count);
      res.send({ likeCount: moviesrating.likes_count });
    }
  });
});





  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  }

module.exports = router;  