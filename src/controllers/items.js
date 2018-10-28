const dbq = require('../db/queries');
const { errorHandler } = require('../helper');
const { distanceMiles } = require('../config');

const listBySearchTerm = async (searchTerm, lat, lng) => {
  try {
    const response = await dbq.list({ searchTerm, lat, lng }, distanceMiles);
    return response;
  } catch (error) {
    const errorHandled = errorHandler(error);
    throw errorHandled;
  }
};

module.exports = {
  listBySearchTerm
};
