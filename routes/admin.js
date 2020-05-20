var express = require("express");
var router = express.Router();
var AdminController = require("../controllers/admin")

//============================= Basic routes to be revisited ============================//
//  initial admin route
router.get("/admin-dashboard", function (req, res, next) {
  res.render("admin-dashboard");
});

//  posting new movies raiting 
router.get("/admin-movie-rating-post", function (req, res, next) {
  res.render("admin-movie-rating-post");
});


// Ads Posters
router.get("/admin-upload-ads-posters", function (req, res, next) {
  res.render("admin-upload-ads-posters");
});
// Ads Posters routes
router.get("/admin-upload-movies-poster", function (req, res, next) {
  res.render("admin-upload-movies-poster");
});

router.get("/admin-upload-series-poster", function (req, res, next) {
  res.render("admin-upload-series-poster");
});

router.get("/admin-upload-trailer-poster", function (req, res, next) {
  res.render("admin-upload-trailer-poster");
});

router.get("/admin-upload-newlyAdded-poster", function (req, res, next) {
  res.render("admin-upload-newlyAdded-poster");
});

// Movies Thrill  route
router.get("/admin-upload-movieThrills", function (req, res, next) {
  res.render("admin-upload-movieThrills");
});

router.get("/admin-upload-amazingKill", function (req, res, next) {
  res.render("admin-upload-amazingKill");
});
router.get("/admin-upload-loveScene", function (req, res, next) {
  res.render("admin-upload-loveScene");
});
router.get("/admin-upload-funniestScene", function (req, res, next) {
  res.render("admin-upload-funniestScene");
});
router.get("/admin-upload-bestScript", function (req, res, next) {
  res.render("admin-upload-bestScript");
});

router.get("/admin-upload-scariestMovies", function (req, res, next) {
  res.render("admin-upload-scariestMovies");
});

router.get("/admin-upload-deathScene", function (req, res, next) {
  res.render("admin-upload-deathScene");
});



// login admin, under con
router.get("/admin-panel", function (req, res, next) {
  res.render("admin-panel");
});
router.get("/admin-dashboard-movies", function (req, res, next) {
  res.render("admin-dashboard-movies");
});
router.get("/admin-dashboard-series", function (req, res, next) {
  res.render("admin-dashboard-series");
});
router.get("/admin-uploaded-movies", function (req, res, next) {
  res.render("admin-uploaded-movies");
});
router.get("/admin-dashboard-movies-edit", function (req, res) {
  res.render("admin-dashboard-movies-edit");
});

//============================= Basic routes to be revisited ============================//

// getting movies posted by admin +/ viewed by admin /
router.get("/newMovies/", AdminController.get_movies_for_admin);

// getting series posted by admin +/ viewed by admin /
router.get("/seriesMovies/", AdminController.get_series_for_admin);

// posting new movies
router.post("/admin-dashboard-movies", AdminController.post_new_movies);

// posting amazing death scene and kills
router.post("/admin-upload-amazingKill", AdminController.post_amazing_kills_and_scene);

// posting amazing stunts
router.post("/admin-upload-amazingStunt", AdminController.post_amazing_stunts);

// posting most romantic scene
router.post("/admin-upload-loveScene", AdminController.post_best_love_scene);

// posting death scene
router.post("/admin-upload-deathScene", AdminController.post_death_scene);

// posting best script
router.post("/admin-upload-bestScript", AdminController.post_best_script);

// posting funniest scene
router.post("/admin-upload-funniestScene", AdminController.post_funniest_scene);

// posting scariest movies
router.post("/admin-upload-scariestMovies", AdminController.post_scariest_movies);

// posting new series movie
router.post("/admin-dashboard-series", AdminController.post_new_series_movies);

// posting new movies poster
router.post("/admin-upload-movies-poster", AdminController.post_movies_poster);

// posting new series poster
router.post("/admin-upload-series-poster", AdminController.post_series_poster);

// posting trailer poster
router.post("/admin-upload-trailer-poster", AdminController.post_trailer_poster);

// posting new arrival poster
router.post("/admin-upload-newlyAdded-poster", AdminController.post_new_arrival);


// posting rating by admin
router.post("/admin-movie-rating-post", AdminController.admin_movie_rating_post);

// posting new episode
router.post("/seriesMovies/:id/seasons", AdminController.post_new_episode);

// editing new movies 
router.get("/newMovies/:id/edit", AdminController.edit_new_movie);

// getting specified movie by id 
router.get("/seriesMovies/:id", AdminController.get_specific_series_movie_via_id);

// getting specified movie season by id
router.get("/tvSeason/:id/episodes", AdminController.get_specific_movie_season_via_id);

//   posting episodes to a particular season
router.post("/tvSeason/:id/episodes", AdminController.post_specific_movie_season_via_id);

//updating movies details 
router.put("/newMovies/:id", AdminController.update_new_movie_details);

//delete movie details via id 
router.delete("/newMovies/:id", AdminController.delete_specified_movie_by_id);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;  