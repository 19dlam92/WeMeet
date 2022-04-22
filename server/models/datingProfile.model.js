const mongoose = require('mongoose');

const DatingProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
        minlength: [2, "This MUST be at least 2 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter your last name"],
        minlength: [2, "This MUST be at least 2 characters"]
    },
    age: {
        type: Number,
        required: [true, "Please enter your age"],
        min: [0.01, "This section MUST be greater than 0"]
    },
    gender: {
        type: String
    },
    language: {
        type: String
    },
    orientation: {
        type: String
    },
    ethnicity: {
        type: String
    },
    employment: {
        type: String
    },
    astrologicalSign: {
        type: String
    }
}, { timestamps: true })

const DatingProfile = mongoose.model('DatingProfile', DatingProfileSchema);
module.exports = DatingProfile;