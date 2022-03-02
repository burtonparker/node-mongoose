const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite'; // automatically connects us to the nucampsite database in the mongodb server
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

connect.then(() => { // connect returns a promise so we can chain that shit

    console.log('Connected correctly to server');

    Campsite.create({
        name: 'React Lake Campground',
        description: 'test'
    })
    .then(campsite => {
        console.log(campsite);
        return Campsite.find();
    }) 
    .then(campsites => {
        console.log(campsites);
        return Campsite.deleteMany();
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
});