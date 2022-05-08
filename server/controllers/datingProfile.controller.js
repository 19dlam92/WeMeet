const { response } = require('express');
const DatingProfile = require('../models/datingProfile.model');


class DatingProfileController {

    // =============================================================
    // REGISTER
    // =============================================================

    // register = ( request, response ) => {
    //     DatingProfile.create(request.body)
    //     .then((newUser) => {
    //         const userToken = jwt.sign({
    //             id: user._id
    //         }, process.env.SECRET_KEY);
    //         response
    //             .cookie('usertoken', userToken, process.env.SECRET_KEY, {
    //                 httpOnly: true
    //             })
    //             .json({ message: "SUCCESS!!", newUser: newUser });
    //     })
    //     .catch((err) => {
    //         response.json({ message: 'ERRRRRRORRRRRRRRR', error: err})
    //     })
    // }


    regist = ( request, response ) => {
        DatingProfile.create(request.body)
        .then((newUser) => {
            response.json({ results: newUser})
        })
        .catch((err) => {
            response.json({ message: 'ERRRRRRORRRRRRRRR', error: err})
        })
    }

    // =============================================================
    // LOGIN
    // =============================================================




    // =============================================================
    // LOGOUT
    // =============================================================





    // =============================================================
    // CREATE ONE
    // =============================================================
    
    createNewDatingProfile = ( request, response ) => {
        DatingProfile.create(request.body)
        .then((newDatingProfile) => {
            response.json({ results: newDatingProfile })
        })
        .catch((err) => {
            response.json({ message: 'ERRRRRRORRRRRRRRR', error: err})
        })
    }
    
    
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