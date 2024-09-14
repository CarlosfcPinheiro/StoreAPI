// Importing modules
const mongoose = require('mongoose');

// Setting the schema of the documents/models
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'The product must hava a name.'],
    },
    price:{
        type: Number,
        required: [true, 'The product must have a price.']
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 4.5
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        // To limit the user-submitted data
        enum:{
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            // custom message sent if the value doesn't match with the values above
            message: '{VALUE} is not supported.'
        }
        // Enumarate array form to limit submitted data
        // enum: ['ikea', 'liddy', 'caressa', 'marcos']
    }
});

// Exporting the model to create the documents on db
// .model() => create an subclass of mongoose.Model, that through the model it's possible to create instances (documents) of this model
module.exports = mongoose.model('Product', productSchema);