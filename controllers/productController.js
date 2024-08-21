const Product = require('../models/product');

// Add a product
exports.addProduct = async (req, res) => {
  try {
    const product = new Product({ ...req.body, addedBy: req.user.id });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all visible products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ isVisible: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin update product visibility
exports.updateProductVisibility = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { isVisible: req.body.isVisible }, { new: true });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin delete product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
