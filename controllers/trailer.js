var request = require("request");

// getting all trailers from TMDB

exports.get_trailers =  function(req, res) {
  request(
    "https://api.themoviedb.org/3/movie/popular?api_key=0374471c4735f7947d0663362926939d",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("dashboard-coming-soon", { data: data, user: req.user });
      }
    }
  );
}


exports.get_trailers_2 =  function(req, res) {
  request(
    "https://api.themoviedb.org/3/movie/popular?api_key=0374471c4735f7947d0663362926939d&page=2",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("dashboard-coming-soon-2", { data: data, user: req.user });
      }
    }
  );
}

exports.get_trailers_3 =  function(req, res) {
  request(
    "https://api.themoviedb.org/3/movie/popular?api_key=0374471c4735f7947d0663362926939d&page=3",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("dashboard-coming-soon-3", { data: data, user: req.user });
      }
    }
  );
}

exports.get_trailers_4 =  function(req, res) {
  request(
    "https://api.themoviedb.org/3/movie/popular?api_key=0374471c4735f7947d0663362926939d&page=4",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("dashboard-coming-soon-4", { data: data, user: req.user });
      }
    }
  );
}

exports.get_movies_top_rated = function(req, res) {
  request(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=0374471c4735f7947d0663362926939d&language=en-US&page=1",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("dashboard-movies-top-rated", { data: data, user: req.user });
      }
    }
  );
}

exports.get_movies_trending = function(req, res) {
  request(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=0374471c4735f7947d0663362926939d",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("dashboard-movies-trending", { data: data, user: req.user });
      }
    }
  );
}

exports.get_movies_up_coming = function(req, res) {
  request(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=0374471c4735f7947d0663362926939d&language=en-US&page=1",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("dashboard-movies-now-playing", { data: data, user: req.user });
      }
    }
  );
}

// getting a specific trailer from TMDB
exports.get_specific_movie_trailer = function(req, res, next) {
  var id = req.params.id;
  request(
    "https://api.themoviedb.org/3/movie/" +
      req.params.id +
      "?api_key=0374471c4735f7947d0663362926939d&language=en-US&append_to_response=credits,images,videos,recommendations,reviews",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(error);
        var data = JSON.parse(body);
        res.render("dashboard-movie-profile", { data: data, id: req.params.id, user: req.user });
      }
    }
  );
}

// getting a list of trailers from TMDB
exports.get_trailers_list = function(req, res, next) {
  var id = req.params.id;
  request(
    "https://api.themoviedb.org/3/movie/" +
      req.params.id +
      "?api_key=0374471c4735f7947d0663362926939d&language=en-US&append_to_response=credits,images,videos,recommendations,reviews",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(error);
        var data = JSON.parse(body);
        res.render("category-trailers", { data: data, id: req.params.id, user: req.user });
      }
    }
  );
}