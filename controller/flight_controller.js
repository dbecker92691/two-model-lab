const express = require('express');
const Flyers = require('../models/birds_that_fly');

const router = express.Router();


router.get('/', (req, res) => {
    Flyers.find({}, (err, foundFlyers) => {
      res.render('')
    })
})




module.exports = router;