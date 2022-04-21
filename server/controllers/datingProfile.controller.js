const DatingProfile = require('../models/datingProfile.model');

// =============================================================
// CREATE ONE
// =============================================================

module.exports.createNewDatingProfile = ( request, response) => {
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

module.exports.findAllDatingProfiles = ( request, response ) => {
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

module.exports.findOneDatingProfile = ( request, response ) => {
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

module.exports.updateOneDatingProfile = ( request, response ) => {
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

module.exports.deleteOneDatingProfile = ( request, response ) => {
    DatingProfile.deleteOne({ _id: request.params.id })
    .then((deleteDatingProfile) => {
        response.json({ results: deleteDatingProfile })
    })
    .catch((err) => {
        response.json({ message: 'ERRRRRRORRRRRRRRR', error: err})
    })
}