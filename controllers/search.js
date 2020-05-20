var User = require("../models/user");
var request = require("request");

// getting search result
exports.get_search_results = function (req, res) {
    var query = req.query.search;
    console.log(req.query.search)
    request(
        "https://api.themoviedb.org/3/search/multi?api_key=0374471c4735f7947d0663362926939d&language=en-US&query=" +
        query,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dash", { data: data, user: req.user });
            }
        }
    );
}

//  getting a specific searched result via id
exports.get_specific_search_result = function (req, res, next) {
    var id = req.params.id;
    request(
        "https://api.themoviedb.org/3/movie/" +
        req.params.id +
        "?api_key=0374471c4735f7947d0663362926939d&language=en-US&append_to_response=credits,images,videos,recommendations,reviews",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body);
                res.render("dashboard-movie-profile", {
                    data: data,
                    id: req.params.id, user: req.user
                });
            }
        }
    );
}  