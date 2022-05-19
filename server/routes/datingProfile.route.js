const DatingProfileController = require('../controllers/datingProfile.controller');
// require(`../controllers/${controllerFile}`)
// this will change controllers according to the file

module.exports = (app) => {
    
    app.get("/api/datingProfile", DatingProfileController.findAllDatingProfiles);
    
    // app.get("/api/datingProfile/:id", DatingProfileController.findOneDatingProfile);
    
    app.get("/api/datingProfile/loggedInUser", DatingProfileController.loggedInUser);

    app.get("/api/datingProfile/logout", DatingProfileController.logout);

    app.put("/api/datingProfile/:id", DatingProfileController.updateOneDatingProfile);
    
    // app.post("/api/datingProfile", DatingProfileController.createNewDatingProfile);
    
    app.post("/api/datingProfile/register", DatingProfileController.register);

    app.post("/api/datingProfile/login", DatingProfileController.login);

    app.delete("/api/datingProfile/:id", DatingProfileController.deleteOneDatingProfile);
    
}