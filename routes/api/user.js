const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);


router
  .route("api/user/:email")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
router.route("/edit")
  .post(userController.update)
  module.exports = router;