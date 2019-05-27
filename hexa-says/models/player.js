const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    score: {type: Number, required: true}
})

module.exports = mongoose.model("Player", playerSchema)