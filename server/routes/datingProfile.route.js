const DatingProfileController = require('../controllers/datingProfile.controller');

module.exports = (app) => {
    app.get("/api/datingProfile", DatingProfileController.findAllDatingProfiles);
    app.get("/api/datingProfile/:id", DatingProfileController.findOneDatingProfile);
    app.put("/api/datingProfile/:id", DatingProfileController.updateOneDatingProfile);
    app.post("/api/datingProfile", DatingProfileController.createNewDatingProfile);
    app.post("/api/datingProfile/register", DatingProfileController.register);
    app.delete("/api/datingProfile/:id", DatingProfileController.deleteOneDatingProfile);
}