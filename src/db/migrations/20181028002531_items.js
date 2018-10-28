exports.up = (knex, Promise) => { //eslint-disable-line
  return knex.schema.createTable('items', (table) => {
    table.increments('id').primary();
    table.text('item_name');
    table.decimal('lat', null);
    table.decimal('lng', null);
    table.text('item_url');
    table.text('img_urls');
  });
};

exports.down = (knex, Promise) => { //eslint-disable-line
  return knex.schema.dropTable('items');
};
