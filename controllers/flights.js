module.exports = {
    index,
    newFlightForm,
    create,
    show,
    addDestination,
    deleteDestination,
    addTicket,
}

const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

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

function deleteDestination(req, res, next) {
    Flight.findById(req.params.flightId, function (err, flight) {
        flight.destinations.splice(req.params.destinationId, 1);
        flight.save()
        res.redirect(`/flights/${flight._id}`);
    })
}

function addTicket(req, res, next) {
    let ticket = req.body;
    ticket.flight = req.params.id;
    Ticket.create(ticket);
    res.redirect(`/flights/${req.params.id}`);
}

function showTickets(req, res, next){




    Ticket.find({flight:req/params/id}, function(err, tickets) {
    
    });
}