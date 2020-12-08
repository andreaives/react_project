const router = require("express").Router();
const userController = require("../../controllers/userController");

const User = require('../models/user');


// MongoDB Setup
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({
    name: name, email: email
  })
  newUser.save()
    .then(() => res.json({
      message: "Created account successfully"
    }))
    .catch(err => res.status(400).json({
      "error": err,
      "message": "Error creating account"
    }))
})

// OG
router.route("/")
  .get(userController.findAll)
  .post(userController.create);


router
  .route("/user/:email")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;