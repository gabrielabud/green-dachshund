const express = require('express');

const router = express.Router();
const { listBySearchTerm } = require('../controllers/items');

router.get(
  '/',
  async (req, res, next) => {
    try {
      const response = await listBySearchTerm(req.query.searchTerm, req.query.lat, req.query.lng);
      res.status(200).json(response);
      return next();
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = router;
