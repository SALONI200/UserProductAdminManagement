const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.verifyUser = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error('Authentication failed!');
    }
    console.log(token);
    
    const verified = jwt.verify(token,process.env.JWT_SECRET);
    req.user = verified;  
    next();
  } catch (err) {
    console.log(err);
    
    res.status(400).send('Invalid token !');
  }
};

exports.verifyAdmin = async (req, res, next) => {
  await exports.verifyUser(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Not authorized' });
    }
  });
};
