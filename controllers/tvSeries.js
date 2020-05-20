var SeriesMovie = require("../models/tv-series/seriesMovie");
var TvSeason = require("../models/tv-series/tvSeason");
var request = require("request");

// getting tvseries list from TMDB
exports.get_tv_series = function (req, res, next) {
    request(
        "https://api.themoviedb.org/3/tv/popular?api_key=0374471c4735f7947d0663362926939d&language=en-US",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dashboard-home", { data: data, user: req.user });
            }
        }
    );
}

// getting tvseries list from TMDB pg 2
exports.get_tv_series_2 = function (req, res, next) {
    request(
        "https://api.themoviedb.org/3/tv/popular?api_key=0374471c4735f7947d0663362926939d&language=en-US&page=2",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dashboard-home-2", { data: data, user: req.user });
            }
        }
    );
}

// getting tvseries list from TMDB pg 3
exports.get_tv_series_3 = function (req, res, next) {
    request(
        "https://api.themoviedb.org/3/tv/popular?api_key=0374471c4735f7947d0663362926939d&language=en-US&page=3",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dashboard-home-3", { data: data, user: req.user });
            }
        }
    );
}
// getting tvseries list from TMDB pg 4
exports.get_tv_series_4 = function (req, res, next) {
    request(
        "https://api.themoviedb.org/3/tv/popular?api_key=0374471c4735f7947d0663362926939d&language=en-US&page=4",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dashboard-home-4", { data: data, user: req.user });
            }
        }
    );
}

// getting specific series via id (TMDB)  
exports.get_specified_tv_series = function (req, res, next) {
    var id = req.params.id;
    request(
        "https://api.themoviedb.org/3/tv/" +
        req.params.id +
        "?api_key=0374471c4735f7947d0663362926939d&language=en-US&append_to_response=credits,images,videos,recommendations,reviews",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dashboard-tv-profile", { data: data, id: req.params.id, user: req.user });
            }
        }
    );
}

exports.get_tv_trending = function (req, res, next) {
    request(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=0374471c4735f7947d0663362926939d",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dashboard-tv-trending", { data: data, user: req.user });
            }
        }
    );
}

exports.get_tv_top_rated = function (req, res, next) {
    request(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=0374471c4735f7947d0663362926939d&language=en-US&page=1",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dashboard-tv-top-rated", { data: data, user: req.user });
            }
        }
    );
}


// https://api.themoviedb.org/3/movie/latest?api_key=0374471c4735f7947d0663362926939d&language=en-US now playing
// https://api.themoviedb.org/3/movie/top_rated?api_key=0374471c4735f7947d0663362926939d&language=en-US&page=1  top rated 
// getting trailer list  
exports.get_tv_series_list = function (req, res, next) {
    var id = req.params.id;
    request(
        "https://api.themoviedb.org/3/tv/" +
        req.params.id +
        "?api_key=0374471c4735f7947d0663362926939d&language=en-US&append_to_response=credits,images,videos,recommendations,reviews",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dashboard-tv-profile", { data: data, id: req.params.id, user: req.user });
            }
        }
    );
}

// getting tvseries by admin  
exports.get_tv_series_by_admin = function (req, res) {
    SeriesMovie.find({}, function (err, seriesMovies) {
        if (err) {
            res.redirect("dashboard-new-arrivals-series");
            console.log(err);
        } else {
            res.render("dashboard-new-arrivals-series", { seriesMovies: seriesMovies, user: req.user });
        }
    });
}

// getting specific series via id by admin  
exports.get_specific_series_movies_posted_by_admin = function (req, res) {
    SeriesMovie.findById(req.params.id).populate("tvSeasons").exec(function (err, foundSeriesMovie) {
        if (err) {
            res.redirect("/seriesMovie");
        } else {
            res.render("dashboard-new-arrivals-series-profile", { seriesMovie: foundSeriesMovie });
        }
    })
}

// getting episodes of series movies  
exports.get_episodes_of_series_movies = function (req, res) {
    TvSeason.findById(req.params.id).populate("tvEpisodes").exec(function (err, foundTvSeason) {
        if (err) {
            console.log(err);
            res.redirect("/seriesMovie/" + tvSeason._id);
        } else {
            res.render("dashboard-new-arrivals-series-profile-episodes", { tvSeason: foundTvSeason });
        }
    })
}