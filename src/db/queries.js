const knex = require('../db/knex');
const { errorHandler } = require('../helper');

async function list(filters = {}, distance) {
  const { searchTerm, lat, lng } = filters;
  try {
    let filteredItems = [];
    if (lat === undefined || lng === undefined) {
      filteredItems = await knex.raw(`SELECT *
      FROM items
      WHERE UPPER(item_name) LIKE UPPER('%${searchTerm || ''}%')
      LIMIT 20`);
    } else {
      filteredItems = await knex.raw(`SELECT *, ( 3959 * acos( cos( radians(${lat}) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin(radians(lat)) ) ) AS distance
      FROM items
      WHERE ( 3959 * acos( cos( radians(${lat}) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin(radians(lat)) ) ) < ${distance} 
      AND UPPER(item_name) LIKE UPPER('%${searchTerm || ''}%')
      ORDER BY distance
      LIMIT 20`);
    }
    return filteredItems.rows;
  } catch (error) {
    const errorHandled = errorHandler(error);
    throw errorHandled;
  }
}

module.exports = {
  list
};
