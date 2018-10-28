const itemsData = require('../data/items');

exports.seed = (knex) => {
  return knex('items').del()
    .then(() => {
      return knex('items').insert(itemsData);
    });
};
