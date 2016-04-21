var users = require('../models/users');

module.exports = {
    showName: function(req, res, next) {
        var name = parseInt(res.params.id);
        res.status(200).json(name);
    },
    showLocation: function(req, res, next) {
        var location = parseInt(res.params.id);
        res.status(200).json(location);
    },
    showOccupations: function(req, res, next) {
        var occupations = parseInt(res.params.id);
        res.status(200).json(occupations);
    },
    showlatestOccupation: function(req, res, next) {   //  <--- not sure about this one
        var occupations = parseInt(req.params.id);
        var latest = function() {
            return (occupations.length - 1);
        };
        res.status(200).json(latest);
    },
    showHobbies: function(req, res, next) {
        var hobbies = parseInt(res.params.id);
        res.status(200).json(hobbies);
    },
    showHobbiesType: function(req, res, next) {     //  <--- another mind bender, don't know if its even close!
        var hobbieType = parseInt(req.query.type);
        if (hobbieType) {
            var result = hobbies.filter(function(hobbies) {
                return hobbies.hobbieType === hobbieType;
            });
            res.status(200).json(result);
        }
        else {
            res.status(200).json(hobbies);
        }
    },




};
