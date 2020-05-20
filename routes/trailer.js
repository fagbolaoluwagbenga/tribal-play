var express = require("express");
var router = express.Router();
var TrailerController = require("../controllers/trailer");


// getting all trailers from TMDB
router.get("/trailers", isLoggedIn, TrailerController.get_trailers);
// getting all trailers from TMDB page 2
router.get("/trailers-2", isLoggedIn, TrailerController.get_trailers_2);
// getting all trailers from TMDB page 3
router.get("/trailers-3", isLoggedIn, TrailerController.get_trailers_3);
// getting all trailers from TMDB page 4
router.get("/trailers-4", isLoggedIn, TrailerController.get_trailers_4);
// getting all trailers from TMDB page 4
router.get("/top-rated", isLoggedIn, TrailerController.get_movies_top_rated);

router.get("/trending-movies", isLoggedIn, TrailerController.get_movies_trending);

router.get("/up-coming", isLoggedIn, TrailerController.get_movies_up_coming);

// getting a specific movie trailer (details)
router.get("/trailers/:id", isLoggedIn, TrailerController.get_specific_movie_trailer);
// getting a list of trailers (although still yet to figure out why i wrote you)
router.get("/trailers/:id/trailer-list", isLoggedIn, TrailerController.get_trailers_list);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;  