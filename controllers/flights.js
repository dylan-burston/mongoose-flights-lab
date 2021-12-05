module.exports = {
    index,
    newFlightForm,
    create,
    show,
    addDestination
}

const Flight = require('../models/flight') 

function index(req, res, next) {
    Flight.find({}, function(err, flights) {
        res.render('flights', { flights });
    });
}

function newFlightForm(req, res, next) {
    res.render('new.ejs');
}

function create(req, res, next) {
    Flight.create(req.body);
    res.redirect('/flights');
}

function show(req, res, next) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.sort(function(a, b) {return (a.arrival - b.arrival)})
        res.render('show', { flight });
    });
}

function addDestination(req, res, next) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.destinations.push(req.body);
        flight.save();
        res.redirect(`/flights/${flight._id}`);
    })
}