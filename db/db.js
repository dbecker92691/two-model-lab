const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/birds";

mongoose.connect(connectionString, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Database is connected');
});

mongoose.connection.on('disconnected', () => {
    console.log('Database is disconnected')
});

mongoose.connection.on('error', (err)=> {
    console.log('error', err)
})