const express = require('express');
const { createAdmin, signUp, signIn } = require('../controllers/authController');
const router = express.Router();

router.post('/admin', createAdmin); // Admin creation
router.post('/signup', signUp); // User sign up
router.post('/signin', signIn); // User sign in

module.exports = router;
