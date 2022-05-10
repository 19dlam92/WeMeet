const DatingProfile = require('../models/datingProfile.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class DatingProfileController {

    // =============================================================
    // REGISTER
    // =============================================================

    register = ( request, response ) => {
        DatingProfile.create(request.body)
        .then((newUser) => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
            response
                .cookie('usertoken', userToken, process.env.SECRET_KEY, {
                    httpOnly: true
                })
                .json({ message: 'SUCCESS!!', newUser: newUser });
        })
        .catch((err) => {
            response.json({ message: 'ERRRRRRORRRRRRRRR', error: err})
        })
    }


    // register = ( request, response ) => {
    //     DatingProfile.create(request.body)
    //     .then((newUser) => {
    //         response.json({ message: "SUCCESS!!", newUser: newUser })
    //     })
    //     .catch((err) => {
    //         response.json({ message: 'ERRRRRRORRRRRRRRR', error: err})
    //     })
    // }


    // =============================================================
    // LOGIN
    // =============================================================

    login = async( request, response ) => {
        const user = await DatingProfile.findOne({ email: request.body.email });
        if (user == null) {
            return response.sendStatus(400);
        }

        const correctPassword = await bcrypt.compare( request.body.password, user.password );
        if (!correctPassword) {
            return response.sendStatus(400)
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
        response
            .cookie('usetoken', userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({  message: 'SUCCESS!!' })
    }


    // =============================================================
    // LOGOUT
    // =============================================================

    logout = ( request, response ) => {
        response.clearCookie('usertoken');
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
    //         response.json({ message: 'ERRRRRRORRRRRRRRR', error: err})
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
            response.json({ message: 'ERRRRRRORRRRRRRRR', error: err})
        })
    }
    
    
    // =============================================================
    // GET ONE BY ID
    // =============================================================
    
    findOneDatingProfile = ( request, response ) => {
        DatingProfile.findOne({ _id: request.params.id })
        .then((oneDatingProfile) => {
            response.json({ results: oneDatingProfile })
        })
        .catch((err) => {
            response.json({ message: 'ERRRRRRORRRRRRRRR', error: err })
        })
    }
    
    
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
            response.json({ message: 'ERRRRRRORRRRRRRRR', error: err })
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
            response.json({ message: 'ERRRRRRORRRRRRRRR', error: err})
        })
    }


} 

module.exports = new DatingProfileController();