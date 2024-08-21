const express = require('express');
const { addProduct, getProducts, updateProductVisibility, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware.verifyUser, addProduct); // Add product
router.get('/', getProducts); // Get products
router.put('/:id', authMiddleware.verifyAdmin, updateProductVisibility); // Update product visibility
router.delete('/:id', authMiddleware.verifyAdmin, deleteProduct); // Delete product

module.exports = router;
