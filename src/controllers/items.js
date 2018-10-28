const dbq = require('../db/queries');
const { errorHandler } = require('../helper');

const listBySearchTerm = async (searchTerm, lat, lng) => {
  try {
    console.log('controller search term', searchTerm);
    const response = await dbq.list({ searchTerm, lat, lng }, 'items');
    return response;
  } catch (err) {
    const handledError = errorHandler(err);
    throw handledError;
  }
};

module.exports = {
  listBySearchTerm
};
