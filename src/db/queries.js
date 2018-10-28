
const knex = require('../db/knex');
  
async function list(filters = {}, model) {
    try {
      const models = await knex(model)
        .select('*')
        .where(filters)
      return models;
    } catch (e) {
        throw new Error('Error from filte query');
    }
  }
  
module.exports = {
    list
};
  