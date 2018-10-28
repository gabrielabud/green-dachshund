const express = require('express');
const router = express.Router();
const { listBySearchTerm } = require('../controllers/items');


router.get(
  '/',
  async (req, res, next) => {
    try {
      const response = await listBySearchTerm();
      res.status(200).json(response);
      return next();
    } catch (error) {
      const errorDetails = error.error ? error.error : error;
      return next(errorDetails);
    }
  }
);

  
module.exports = router;
