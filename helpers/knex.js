const knex = require('knex');
require('dotenv').config();

const { SQL_USERNAME, SQL_PASSWORD, SQL_HOST, SQL_DATABASE } = process.env;

const dbConnection = knex({
  client: 'mssql',
  connection: {
    user: SQL_USERNAME,
    password: SQL_PASSWORD,
    host: SQL_HOST,
    database: SQL_DATABASE,
  },
  pool: {
    min: 2,
    max: 10,
  },
});

module.exports = dbConnection;
