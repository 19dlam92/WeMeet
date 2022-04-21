const DatingProfileController = require('../controllers/datingProfile.controller');

module.exports = (app) => {
    app.get("/api/DatingProfile", DatingProfileController.findAllDatingProfile);
    app.get("/api/DatingProfile/:id", DatingProfileController.findOneDatingProfile);
    app.put("/api/DatingProfile/:id", DatingProfileController.updateOneDatingProfile);
    app.post("/api/DatingProfile", DatingProfileController.createNewDatingProfile);
    app.delete("/api/DatingProfile/:id", DatingProfileController.deleteOneDatingProfile);
}