
const knex = require('../db/knex');
const { errorHandler } = require('../helper');

async function list(filters = {}, model) {
  console.log('queries filter', filters);
  const { searchTerm, lat, lng } = filters;
  console.log('queeries searchTerm', searchTerm);
  try {
    const models = await knex(model)
      .select('*')
      .where('items.item_name', 'like', `%${searchTerm || ''}%`)
      .limit(20);
    return models;
  } catch (e) {
    const errorHandled = errorHandler(e);
    throw errorHandled;
  }
}

module.exports = {
  list
};
