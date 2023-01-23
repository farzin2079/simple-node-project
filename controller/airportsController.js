const Airport = require('../model/airport');


const airports_index = (req, res) => {
    Airport.find().sort({ name: 1 })
    .then( result => {
        res.render('airports', { title: 'Airports', airports: result });
    })
    .catch(err => res.status(404).render('404', {title: '404 not found', message: err}))
};

// const airports_details = (req, res) => {
//     const id = req.params.id;
//     Airport.findById()
//     .then( result => {
//         res.render('airports', { title: 'Airports', airport: result });
//     })
//     .catch(err => console.log(err))
// };

const airports_post = (req, res) => {
    const airport = Airport(req.body)
    airport.save()
    .then( result => res.redirect('/airports'))
    .catch( err => res.status(404).render('404', {title: '404 not found', message: err}))
    
};


module.exports = {
    airports_index,
    airports_post,
    // airports_details,
};