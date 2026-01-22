const express = require("express");
const router = express.Router();

const validateSignup = require("../middleware/validateSignup");
const userCtrl = require("../controllers/user");

router.post("/signup", validateSignup, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
