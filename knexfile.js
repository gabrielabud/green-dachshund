module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost:5432/green',
      migrations: {
        directory: __dirname + '/src/db/migrations'
      },
      seeds: {
        directory: __dirname + '/src/db/seeds'
      }
    },
    test: {
      client: 'pg',
      connection: 'postgres://localhost:5432/green_test',
      migrations: {
        directory: __dirname + '/src/db/migrations'
      },
      seeds: {
        directory: __dirname + '/src/db/seeds'
      }
    }
  };
  