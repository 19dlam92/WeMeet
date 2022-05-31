const DatingProfile = require('../models/datingProfile.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class DatingProfileController {

    // =============================================================
    // REGISTER
    // =============================================================

    // register = async( request, response ) => { //---> CURRENTLY broken code MODIFY <---
    //     try {
    //         const validEmail = await DatingProfile.find({ email: request.body.email })

    //         const newUser = await DatingProfile.create( validEmail )

    //         const accessToken = jwt.sign({ id: user._id, firstName: user.firstName }, newUser, process.env.SECRET_KEY);

    //         response
    //             .cookie("accessToken", accessToken, process.env.SECRET_KEY, { httpOnly: true })
    //             .json({ message: "SUCCESS!!" });

    //     } catch {
    //         console.err('ERRRRRRORRRRRRRRR unable to register user', errors)
    //     }


    register = async( request, response ) => {

        const validEmail = await DatingProfile.find({ email: request.body.email })
        if ( validEmail.length === 0 ) {
        // if ( validEmail.length &&  ) {
            response.json({ errors: { email: { message: 'ERRRRRRORRRRRRRRR This email is already taken'}}})
        }

        const newUser = await DatingProfile.create( request.body )
        if ( newUser === null ) {
            response.json({ message: 'ERRRRRRORRRRRRRRR unable to create a new user'})
        }

        const accessToken = jwt.sign({
            id: user._id,
            email: user.email
        }, process.env.SECRET_KEY);

        response
            .cookie("accessToken", accessToken, process.env.SECRET_KEY, { httpOnly: true })
            .json({ message: "SUCCESS!!" });
        if ( accessToken === null ) {
            response.json({ message: 'ERRRRRRORRRRRRRRR wheres my web token!'})
        }
    }


    // https://www.bezkoder.com/react-jwt-auth/

    // =============================================================
    // LOGIN
    // =============================================================

    // login = async( request, response ) => {
    //     try {
    //         const user = await DatingProfile.findOne({ email: request.body.email });
            
    //         const correctPassword = await bcrypt.compare( request.body.password, user.password );
    //         if (!correctPassword) {
    //             return response.sendStatus(400);
    //         }

    //         const accessToken = jwt.sign({
    //             id: user._id,
    //             firstName: user.firstName
    //         }, process.env.SECRET_KEY);
    //         // SECRET_KEY = w/e we named the variable for the SECRET_KEY
    //         response
    //             .cookie("accessToken", accessToken, process.env.SECRET_KEY, { httpOnly: true })
    //             .json({ message: "SUCCESS!!" });
    //     } catch {
    //         console.log('ERRRRRRORRRRRRRRR unable to log in user!')
    //     }
    // }

    login = async( request, response ) => {
        const user = await DatingProfile.findOne({ email: request.body.email });
        if (user === null) {
            return response.sendStatus(400);
            // can also return response.json({ message: ". . . ." })
            // 400 = bad
            // 200 = good
        }

        const correctPassword = await bcrypt.compare( request.body.password, user.password );
        if (!correctPassword) {
            return response.sendStatus(400);
        }

        const accessToken = jwt.sign({
            id: user._id,
            email: user.email
        }, process.env.SECRET_KEY);
        // SECRET_KEY = w/e we named the variable for the SECRET_KEY

        response
            .cookie("accessToken", accessToken, process.env.SECRET_KEY, { httpOnly: true })
            .json({ message: "SUCCESS!!" });
    }


    // =============================================================
    // LOGGED IN USER
    // =============================================================

    loggedInUser = ( request, response ) => {
        const decodedJWT = jwt.decode(request.cookie.accessToken, { complete: true })
        // decode = gets info from a cookie
        // decodedJWT = has info about the user in "payload"
        DatingProfile.findOne({ _id: decodedJWT.payload.id })
        .then((foundUser) => {
            response.json({ results: foundUser })
        })
        .catch((err) => {
            response.json({ message: 'ERRRRRRORRRRRRRRR user not logged in!', error: err})
        })
    }


    // =============================================================
    // LOGOUT
    // =============================================================

    logout = ( request, response ) => {
        response.clearCookie("accessToken");
        response.sendStatus(200);
    }


    // =============================================================
    // CREATE ONE
    // =============================================================
    
    // createNewDatingProfile = ( request, response ) => {
    //     DatingProfile.create(request.body)
    //     .then((newDatingProfile) => {
    //         response.json({ results: newDatingProfile })
    //     })
    //     .catch((err) => {
    //         response.json({ message: 'ERRRRRRORRRRRRRRR cant create a new profile?', error: err})
    //     })
    // }
    
    
    // =============================================================
    // GET ALL
    // =============================================================
    
    findAllDatingProfiles = ( request, response ) => {
        DatingProfile.find()
        .then((allDatingProfiles) => {
            response.json({ results: allDatingProfiles })
        })
        .catch((err) => {
            response.json({ message: 'ERRRRRRORRRRRRRRR wheres everyones profile?', error: err})
        })
    }
    
    
    // =============================================================
    // GET ONE BY ID
    // =============================================================
    
    // findOneDatingProfile = ( request, response ) => {
    //     DatingProfile.findOne({ _id: request.params.id })
    //     .then((oneDatingProfile) => {
    //         response.json({ results: oneDatingProfile })
    //     })
    //     .catch((err) => {
    //         response.json({ message: 'ERRRRRRORRRRRRRRR looking for a user!', error: err })
    //     })
    // }
    
    
    // =============================================================
    // UPDATE ONE BY ID
    // =============================================================
    
    updateOneDatingProfile = ( request, response ) => {
        DatingProfile.findOneAndUpdate(
            { _id: request.params.id },
            request.body,
            { new: true, runValidators: true }
        )
        .then((updateDatingProfile) => {
            response.json({ results: updateDatingProfile })
        })
        .catch((err) => {
            response.json({ message: 'ERRRRRRORRRRRRRRR trying to update my profile!', error: err })
        })
    }
    
    
    // =============================================================
    // DELETE ONE BY ID
    // =============================================================
    
    deleteOneDatingProfile = ( request, response ) => {
        DatingProfile.deleteOne({ _id: request.params.id })
        .then((deleteDatingProfile) => {
            response.json({ results: deleteDatingProfile })
        })
        .catch((err) => {
            response.json({ message: 'ERRRRRRORRRRRRRRR dont want this account anymore!', error: err})
        })
    }


}

module.exports = new DatingProfileController();