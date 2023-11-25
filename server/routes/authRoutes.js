const express = require('express');
const router = express.Router();

const { authenticateUser } = require('../middleware/authentication');

const {
  register,
  login,
  logout,
  showCurrentUser,
} = require("../controllers/authController");

router.post('/register', register);
router.post('/login', login);
router.route("/showMe").get(authenticateUser, showCurrentUser);
router.delete('/logout', authenticateUser, logout);

module.exports = router;
