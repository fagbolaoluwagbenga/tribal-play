var express = require("express");
var router = express.Router();
var TvSeriesController = require("../controllers/tvSeries")

// getting tvseries list from TMDB
router.get("/dashboard", isLoggedIn, TvSeriesController.get_tv_series);

// getting tvseries list from TMDB pg 2
router.get("/dashboard-2", isLoggedIn, TvSeriesController.get_tv_series_2);

// getting tvseries list from TMDB pg 3
router.get("/dashboard-3", isLoggedIn, TvSeriesController.get_tv_series_3);

// getting tvseries list from TMDB pg 4
router.get("/dashboard-4", isLoggedIn, TvSeriesController.get_tv_series_4);

// getting tv_ trending
router.get("/tv-trending", isLoggedIn, TvSeriesController.get_tv_trending);

// getting tv_ trending
router.get("/tv-topRated", isLoggedIn, TvSeriesController.get_tv_top_rated);

// getting specific series via id (TMDB)
router.get("/dashboard/:id", isLoggedIn, TvSeriesController.get_specified_tv_series);

// getting trailer list
router.get("/dashboard/:id/trailer-list", isLoggedIn, TvSeriesController.get_tv_series_list);

// getting tvseries by admin
router.get("/seriesMovie", isLoggedIn, TvSeriesController.get_tv_series_by_admin);

// getting specific series via id by admin
router.get("/seriesMovie/:id", TvSeriesController.get_specific_series_movies_posted_by_admin);

// getting episodes of series movies
router.get("/seriesMovie/season/:id/episodes", isLoggedIn, TvSeriesController.get_episodes_of_series_movies);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;  