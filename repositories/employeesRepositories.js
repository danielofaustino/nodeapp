const dbConnection = require('../helpers/knex');

function getEmployees(req, res) {
  dbConnection
    .select('*')
    .table('employees')
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = {
  getEmployees,
};
