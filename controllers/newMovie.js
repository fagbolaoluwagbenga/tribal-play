var NewMovie = require("../models/movies/newMovie");

// getting list of movies added by admin +/ to be viewed by admin/
exports.get_newMovies_list_Adim_view = function (req, res) {
  NewMovie.find({}, function (err, newMovies) {
    if (err) {
      res.render("admin-uploaded-movies")
      console.log(err);
    } else {
      res.render("dashboard-movies", { newMovies: newMovies });
    }
  });
}

// getting list of movies added by admin +/ to be viewed by users/
exports.get_newMovies_profile_User_view = function (req, res, next) {
  res.render("dashboard-new-movies-profile", { newMovie: NewMovie });
}

// getting posts for movies by users
exports.get_movie_post = function (req, res) {
  NewMovie.findById(req.params.id, function (err, NewMovie) {
    if (err) {
      res.redirect("/newMovie");
    } else {
      res.render("dashboard-new-movies-profile", { newMovie: NewMovie });
    }
  })
    .populate("posts")
    .exec(function (err, newMovie) {
      if (err) {
        console.log(err);
      } else {
      }
    });
}

// posting movies-post by users
exports.users_movies_comment = function (req, res) {
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  NewMovie.findById(req.params.id, function (err, newMovie) {
    if (err) {
      res.redirect("/newMovie");
      console.log(err);
    } else {
      Post.create(req.body.post, function (err, post) {
        if (err) {
          console.log(err);
        } else {
          post.author.id = req.user._id;
          post.author.username = req.user.username;
          post.save();
          // User.save();
          newMovie.posts.push(post);
          newMovie.save();
          res.redirect("/newMovie/" + newMovie._id);
          console.log("actually saved");
        }
      });
    }
  });
}

//display uploaded movie by admin to users
exports.getting_new_movies = function (req, res) {
  NewMovie.find({}, function (err, newMovies) {
    if (err) {
      res.redirect("dashboard-new-arrivals");
      console.log(err);
    } else {
      res.render("dashboard-new-arrivals", { newMovies: newMovies, user: req.user });
    }
  });
}

// getting specified movie by user
exports.getting_specific_movie = function (req, res) {
  NewMovie.findById(req.params.id, function (err, foundNewMovie) {
    if (err) {
      res.redirect("/newMovie");
    } else {
      res.render("dashboard-new-movies-profile", {
        newMovie: foundNewMovie
      });
    }
  });
}