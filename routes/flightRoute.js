const express = require('express');
const control = require('../controller/flightController')

const router = express.Router();

router.get('/', control.flight_index );

router.post('/', control.flight_post );

module.exports = router;