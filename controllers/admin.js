var AmazingKill = require("../models/movie-thrills/amazingKill");
var DeathScene = require("../models/movie-thrills/deathScene");
var AmazingStunt = require("../models/movie-thrills/amazingStunt");
var LoveScene = require("../models/movie-thrills/loveScene");
var MoviesRating = require("../models/movie-rating/moviesRating");
var NewMovie = require("../models/movies/newMovie");
var SeriesMovie = require("../models/tv-series/seriesMovie");
var TvSeason = require("../models/tv-series/tvSeason");
var TvEpisode = require("../models/tv-series/tvEpisode");
var BestScript = require("../models/movie-thrills/bestScript")
var FunniestScene = require("../models/movie-thrills/funniestScene")
var ScariestMovies = require("../models/movie-thrills/scariestMovies")
var MoviesPoster = require("../models/ads-posters/moviesPoster")
var TrailerPoster = require("../models/ads-posters/trailerPoster")
var NewArrival = require("../models/ads-posters/newArrival")
var SeriesPoster = require("../models/ads-posters/seriesPoster")

// getting movies posted by admin +/ viewed by admin /
exports.get_movies_for_admin = function (req, res) {
    NewMovie.find({}, function (err, newMovies) {
        if (err) {
            //res.render("admin-uploaded-movies")
            console.log(err);
        } else {
            res.render("admin-uploaded-movies", { newMovies: newMovies });
        }
    });
}

// getting series posted by admin +/ viewed by admin /  
exports.get_series_for_admin = function (req, res) {
    SeriesMovie.find({}, function (err, seriesMovies) {
        if (err) {
            //res.render("admin-uploaded-movies")
            console.log(err);
        } else {
            res.render("admin-uploaded-series", { seriesMovies: seriesMovies });
        }
    });
}

// posting new movies
exports.post_new_movies = function (req, res) {
    new NewMovie({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director
    }).save(function (err, newMovies) {
        if (err) {
            console.log(err);
            return res.render("admin-dashboard-movies");
        } else {
            console.log("saved successfully");
            res.redirect("/newMovies");
        }
    });
}

// posting amazing death scene and kills
exports.post_amazing_kills_and_scene = function (req, res) {
    new AmazingKill({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, amazingKills) {
        if (err) {
            console.log(err);
            return res.render("admin-dashboard-amazingKill");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-amazingKill");
        }
    });
}

// posting amazing stunts
exports.post_amazing_stunts = function (req, res) {
    new AmazingStunt({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, amazingStunts) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-amazingStunt");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-amazingStunt");
        }
    });
}

// posting most romantic scene 
exports.post_best_love_scene = function (req, res) {
    new LoveScene({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, loveScenes) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-loveScene");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-loveScene");
        }
    });
}

// posting death scene
exports.post_death_scene = function (req, res) {
    new DeathScene({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, deathScenes) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-deathScene");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-deathScene");
        }
    });
}

// posting best script
exports.post_best_script = function (req, res) {
    new BestScript({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, bestScript) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-bestScript");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-bestScript");
        }
    });
}

// posting funniest scene
exports.post_funniest_scene = function (req, res) {
    new FunniestScene({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, funniestScenes) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-funniestScene");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-funniestScene");
        }
    });
}

// posting scariest movies
exports.post_scariest_movies = function (req, res) {
    new ScariestMovies({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, scariestMovies) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-scariestMovies");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-scariestMovies");
        }
    });
}

// posting all posters / movies poster
exports.post_movies_poster = function (req, res) {
    new MoviesPoster({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, moviesPosters) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-moviesPoster");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-moviesPoster");
        }
    });
}

// posting new Arrival poster
exports.post_new_arrival = function (req, res) {
    new NewArrival({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, newArrivals) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-newArrival");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-newArrival");
        }
    });
}

// posting trailer poster
exports.post_trailer_poster = function (req, res) {
    new TrailerPoster({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, trailerPosters) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-trailerPoster");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-trailerPoster");
        }
    });
}

// posting series poster
exports.post_series_poster = function (req, res) {
    new SeriesPoster({
        title: req.body.title,
        category: req.body.category,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        director: req.body.director,
        trailer: req.body.trailer
    }).save(function (err, seriesPosters) {
        if (err) {
            console.log(err);
            return res.render("admin-upload-seriesPoster");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-upload-seriesPoster");
        }
    });
}

// posting new series movie
exports.post_new_series_movies = function (req, res) {
    new SeriesMovie({
        title: req.body.title,
        category: req.body.category,
        series_id: req.body.movie_id,
        image_path: req.body.image_path,
        overview: req.body.overview,
        pg: req.body.pg,
        seasons_count: req.body.seasons_count,
        episode_count: req.body.episode_count,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        series_poster: req.body.series_poster,
        average_runtime: req.body.average_runtime,
        director: req.body.director
    }).save(function (err, seriesMovies) {
        if (err) {
            console.log(err);
            return res.render("admin-dashboard-series");
        } else {
            console.log("saved successfully");
            res.redirect("/seriesMovies");
        }
    });
}

// posting rating by admin
exports.admin_movie_rating_post = function (req, res) {
    new MoviesRating({
        title: req.body.title,
        genre: req.body.genre,
        movie_id: req.body.movie_id,
        image_path: req.body.image_path,
        video_path: req.body.video_path,
        overview: req.body.overview,
        present_position: req.body.present_position,
        previous_position: req.body.previous_position,
        pg: req.body.pg,
        vote_average: req.body.vote_average,
        release_date: req.body.release_date,
        movie_poster: req.body.movie_poster,
        runtime: req.body.runtime,
        likes_count: req.body.likes_count,
        director: req.body.director
    }).save(function (err, moviesRating) {
        if (err) {
            console.log(err);
            return res.render("admin-movie-rating-post");
        } else {
            console.log("saved successfully");
            res.redirect("/admin-movie-rating-post");
        }
    });
}

// posting new episode
exports.post_new_episode = function (req, res) {
    SeriesMovie.findById(req.params.id, function (err, seriesMovie) {
        if (err) {
            console.log(err);
            res.redirect("/seriesMovies");
        } else {
            TvSeason.create(req.body.tvSeason, function (err, tvSeason) {
                if (err) {
                    console.log(err);
                } else {
                    seriesMovie.tvSeasons.push(tvSeason);
                    seriesMovie.save();
                    res.redirect("/tvSeason/" + tvSeason._id + "/episodes");
                    console.log("actually saved")
                }
            });
        }
    });
}

// editing new movies 
exports.edit_new_movie = function (req, res) {
    NewMovie.findById(req.params.id, function (err, foundNewMovie) {
        if (err) {
            res.redirect("/admin-uploaded-movies");
        } else {
            res.render("admin-dashboard-movies-edit", {
                newMovie: foundNewMovie
            });
        }
    });
}

// getting specified movie by id 
exports.get_specific_series_movie_via_id = function (req, res) {
    SeriesMovie.findById(req.params.id, function (err, foundSeriesMovie) {
        if (err) {
            res.redirect("/seriesMovies");
        } else {
            res.render("admin-series-add-seasons", {
                seriesMovie: foundSeriesMovie
            });
        }
    })
        .populate("tvSeasons")
        .exec(function (err, seriesMovie) {
            if (err) {
                console.log(err);
            } else {
            }
        });
}
// getting specified movie season by id
exports.get_specific_movie_season_via_id = function (req, res) {
    TvSeason.findById(req.params.id, function (err, foundTvSeason) {
        if (err) {
            res.redirect("/tvSeason/" + tvSeason._id);
        } else {
            res.render("admin-series-add-episode", {
                tvSeason: foundTvSeason
            });
        }
    })
}

//   posting episodes to a particular season
exports.post_specific_movie_season_via_id = function (req, res) {
    TvSeason.findById(req.params.id, function (err, tvSeason) {
        if (err) {
            console.log(err);
            res.redirect("/TvSeason");
        } else {
            TvEpisode.create(req.body.tvEpisode, function (err, tvEpisode) {
                if (err) {
                    console.log(err);
                } else {
                    tvSeason.tvEpisodes.push(tvEpisode);
                    tvSeason.save();
                    res.redirect("/tvSeason/" + tvSeason._id + "/episodes");
                    console.log("actually saved")
                }
            });
        }
    });
}

//updating movies details 
exports.update_new_movie_details = function (req, res) {
    NewMovie.findByIdAndUpdate(req.params.id, req.body.newMovie, function (err, updatedNewMovie) {
        if (err) {
            res.render("/newMovies/");
        } else {
            newMovie.push(newMovie);
            NewMovie.save();
            res.redirect("/newMovies");
            console.log("updated successfully");
        }
    });
}

//delete movie details via id 
exports.delete_specified_movie_by_id = function (req, res) {
    NewMovie.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            res.redirect("/newMovies/" + req.params.id + "/edit");
        } else {
            res.redirect("/newMovies/");
        }
    });
}