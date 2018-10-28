const dbq = require('../db/queries');


const listBySearchTerm = async () => {
  try {
    const response = await dbq.list({}, 'items');
    return response;
  } catch (err) {
    throw new Error('Error filtering by searchTerm Controller'); 
  }
};

module.exports = {
    listBySearchTerm
};
  