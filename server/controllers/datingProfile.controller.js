const DatingProfile = require('../models/datingProfile.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class DatingProfileController {

    // =============================================================
    // REGISTER
    // =============================================================




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