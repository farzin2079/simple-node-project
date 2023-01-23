const Flight = require('../model/flight');


const flight_index = (req, res) => {
    res.render('Flight', { title: 'Add New Flight'});
};

const flight_post = (req, res) => {
    const flight = new Flight(req.body)
    flight.save()
    .then( result => res.redirect('/'))
    .catch( err => res.status(404).render('404', {title: '404 not found', message: err}))
};

module.exports = {
    flight_index,
    flight_post
};