const DatingProfileController = require('../controllers/datingProfile.controller');
// const multer = require('multer');
// const { v4: uuid4 } = require('uuid');
// const { path } = require('express/lib/application');

// const storage = multer.diskStorage({
//     destination: function( request, file, cb ) {
//         cb(null, 'images');
//     },
//     filename: function( request, file, cb ) {
//         cb(null, uuid4() + '-' + Date.now() + path.extname(file.originalname))
//         // uuid = generates random ID per upload
//         // '-' = literal hyphen
//         // Date.now = timestamp
//         // path.extname = where file was uploaded
//     }
// })

// const fileFilter = ( request, file, cb ) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if (allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false)
//     }
// }

// const imageUpload = multer({ storage, fileFilter })

module.exports = (app) => {
    
    app.get("/api/datingProfile", DatingProfileController.findAllDatingProfiles);
    
    app.get("/api/datingProfile/:id", DatingProfileController.findOneDatingProfile);
    
    app.put("/api/datingProfile/:id", DatingProfileController.updateOneDatingProfile);
    
    app.post("/api/datingProfile", DatingProfileController.createNewDatingProfile);
    
    app.post("/api/datingProfile/register", DatingProfileController.register);
    
    app.delete("/api/datingProfile/:id", DatingProfileController.deleteOneDatingProfile);
    
}