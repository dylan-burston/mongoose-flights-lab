var express = require('express');
var router = express.Router();
let flightsCtrl = require("../controllers/flights.js")

/* GET home page. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.newFlightForm);
router.post('/', flightsCtrl.create);
router.post('/:id/destinations', flightsCtrl.addDestination);
router.post('/:id/ticket', flightsCtrl.addTicket);
router.delete('/:flightId/:destinationId', flightsCtrl.deleteDestination)
router.get('/:id', flightsCtrl.show);

module.exports = router;
