const router = require("express").Router();
const entriesRoutes = require("./entries");

// Entry routes
router.use("/entries", entriesRoutes);

module.exports = router;
