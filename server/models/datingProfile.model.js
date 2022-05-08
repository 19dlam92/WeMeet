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
        min: [1, "This section MUST be greater than 0"]
    },
    email: {
        type: String,
        required: [true, "Please enter a valid email"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password MUST be at least 8 characters"]
    }
    // gender: {
    //     type: String
    // },
    // language: {
    //     type: String
    // },
    // orientation: {
    //     type: String
    // },
    // ethnicity: {
    //     type: String
    // },
    // employment: {
    //     type: String
    // },
    // astrologicalSign: {
    //     type: String
    // }
}, { timestamps: true })

DatingProfileSchema.virtual('confirmPassword')
    // virtual create a "temporary field"
    .get( () => this.confirmPassword )
    .set( () => this.confirmPassword = value );

const DatingProfile = mongoose.model('DatingProfile', DatingProfileSchema);
module.exports = DatingProfile;