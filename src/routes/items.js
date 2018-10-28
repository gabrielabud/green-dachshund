const express = require('express');

const router = express.Router();
const { listBySearchTerm } = require('../controllers/items');


router.get(
  '/',
  async (req, res, next) => {
    try {
      console.log(req.query.searchTerm);
      const response = await listBySearchTerm(req.query.searchTerm, req.query.lat, req.query.lng);
      res.status(200).json(response);
      return next();
    } catch (error) {
      const errorDetails = error.error ? error.error : error;
      return next(errorDetails);
    }
  }
);

module.exports = router;
