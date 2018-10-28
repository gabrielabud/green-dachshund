module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/green_dachshund',
    migrations: {
      directory: __dirname + '/src/db/migrations' //eslint-disable-line
    },
    seeds: {
      directory: __dirname + '/src/db/seeds' //eslint-disable-line
    }
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/green_dachshund_test',
    migrations: {
      directory: __dirname + '/src/db/migrations' //eslint-disable-line
    },
    seeds: {
      directory: __dirname + '/src/db/seeds'//eslint-disable-line
    }
  }
};
