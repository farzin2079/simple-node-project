const express = require('express');
const control = require('../controller/airportsController')

const router = express.Router();

router.get('/', control.airports_index )
router.post('/', control.airports_post );
// router.get('/:id', control.airports_details )

module.exports = router;