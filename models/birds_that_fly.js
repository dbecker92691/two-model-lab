const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: String,
    Size: String
});


const Flyers = mongoose.model('Flyers', flightSchema);
module.exports = Flyers;

