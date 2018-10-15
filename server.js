const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

require('./db/db');

app.use(morgan('short'));
app.use(methodOverride('_method'));
app.use(bodyParser({urlencoded: true, extended: false}));

const flightController = require('./controller/flight_controller');

app.use('/flight', flightController);


app.get('/', (req, res) => {
    res.render('index.ejs')
});





app.listen(3000, () => {
    console.log("Server is listening on port 3000")
});

