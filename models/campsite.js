const mongoose = require('mongoose');
// this is how we create a schema
const Schema = mongoose.Schema; // doing this so we can just refer to Schema

const campsiteSchema = new Schema({ // first argument is required
    name: {
        type: String,
        required: true,
        unique: true // no two documents should have the same name field
    },
    description: {
        type: String, 
        required: true
    }
}, {
    timestamps: true // automatically adds createdat and updatedat
}); // instantiates a new object named campsiteSchema

// now let's make a model!

const Campsite = mongoose.model('Campsite', campsiteSchema); // be sure to use Capitalized, SINGULAR versions here - in this case we're using Campsite (singular) for the collection campsites (plural)

module.exports = Campsite;