const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

const Flight = require('./model/flight');

const airports = require('./routes/airportsRoute')
const flight = require('./routes/flightRoute')


const app = express();


const mongokey = "mongodb+srv://farzin:bvbvan79@networkNode.feb5xcz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongokey)
 .then(result => app.listen(3000))
 .catch( err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    Flight.find().sort({ createAt: -1 })
    .then(result => {
        res.render('index', { title: 'home', flights: result});
    })
    .catch( err => console.log(err))
});

app.use('/airports', airports);
app.use('/flight', flight);

app.use((req , res) => {
    res.status(404).render('404', {title: 'ERROR', message: '404 not found'} )
})