const express = require('express');
const { getAllUsers, deleteUser, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware.verifyAdmin, getAllUsers); // Get all users
router.delete('/:id', authMiddleware.verifyAdmin, deleteUser); // Delete user
router.put('/:id', authMiddleware.verifyAdmin, updateUser); // Update user

module.exports = router;
