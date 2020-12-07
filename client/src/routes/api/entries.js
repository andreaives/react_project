const router = require("express").Router();
const entryController = require("../../controllers/entryController");

// Matches with "/api/entries"
router.route("/main")
  .get(entryController.findAll)
  .post(entryController.create);

// Matches with "/api/entries"
router
  .route("/main/:id")
  .get(entryController.findById)
  .put(entryController.update)
  .delete(entryController.remove);

module.exports = router;
