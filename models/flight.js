const { TooManyRequests } = require("http-errors");
const mongoose = require('mongoose');

const Schema = mongoose.Schema; // creates schema, defining parameters of schema below lines 6 through 13

const flightSchema = new Schema({
    airline: String,
    airport: {type: String, default: 'DEN'},
    flightNo: Number,
    departs: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);