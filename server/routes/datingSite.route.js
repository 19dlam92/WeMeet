const DatingSiteController = require('../controllers/datingSite.controller');

module.exports = (app) => {
    app.get("/api/DatingSite", DatingSiteController.findAllDatingSite);
    app.get("/api/DatingSite/:id", DatingSiteController.findOneDatingSite);
    app.put("/api/DatingSite/:id", DatingSiteController.updateOneDatingSite);
    app.post("/api/DatingSite", DatingSiteController.createNewDatingSite);
    app.delete("/api/DatingSite/:id", DatingSiteController.deleteOneDatingSite);
}