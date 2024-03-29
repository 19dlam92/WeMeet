const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    imageUpload: {
        type: String
    }
}, { timestamps: true })

DatingProfileSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( () => this._confirmPassword = value );
    // virtual create a "temporary field"
    // creates a property called "confirmPassword"
    // getter and setter creates "temporary fields" for confirmPassword
    // run lines 33 - 35 before running the model object

DatingProfileSchema.pre('validate', function(next) {
    // pre = run the function BEFORE 'validate'
    // function(next) = "do the 'next' step"
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password confirmation does not match');
        // as long as model object's "password" !== confirmPassword
        // run this.invalidate
    }
    next();
});

DatingProfileSchema.pre('save', function(next) {
    // 'validate' & 'save' are reserved words
    // before you 'save' run function(next)
    // 10 = saltRounds
    // saltRounds = # of times password is scrambled
    // 10 is usually standard
    bcrypt.hash(this.password, 10)
        .then((hash) => {
            this.password = hash;
            next();
        });
    // before saving user to db
    // hash user's password
    // .then is a promise
});


module.exports = mongoose.model('DatingProfile', DatingProfileSchema);
