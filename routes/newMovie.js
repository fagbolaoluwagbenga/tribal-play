var express = require("express");
var router = express.Router();
var NewMovieController = require("../controllers/newMovie")

// getting list of movies added by admin +/ to be viewed by admin/
router.get("/dashboard-movies", isLoggedIn, NewMovieController.get_newMovies_list_Adim_view);

// getting list of movies added by admin +/ to be viewed by users/
router.get("/dashboard-new-movies-profile", isLoggedIn, NewMovieController.get_newMovies_profile_User_view);

// getting posts for movies by users
router.get("/newMovie/:id/posts/new", isLoggedIn, NewMovieController.get_movie_post);

// posting movies-post by users
router.post("/newMovie/:id/posts", isLoggedIn, NewMovieController.users_movies_comment);

//display uploaded movie by admin to users
router.get("/newMovie", isLoggedIn, NewMovieController.getting_new_movies);

// getting specified movie by user
router.get("/newMovie/:id", NewMovieController.getting_specific_movie);



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}


module.exports = router;  