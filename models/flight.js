const { TooManyRequests } = require("http-errors");
const mongoose = require('mongoose');

const Schema = mongoose.Schema; // creates schema, defining parameters of schema below lines 6 through 13

const destinationSchema = new Schema({
    airport: {"type": String, "enum": ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: Date,
  }, {
    timestamps: true
  });


const flightSchema = new Schema({
    airline: String,
    airport: {type: String, default: 'DEN'},
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);