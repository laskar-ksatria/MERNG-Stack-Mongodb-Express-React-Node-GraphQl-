const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/graphQL'

function dbConnect() {
    return new Promise((res, rej) => {
        mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            res("We are connected to mongoDB")
        });
    })
    
};

module.exports = dbConnect;