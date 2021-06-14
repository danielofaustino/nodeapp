const express = require('express');
const { getMethod } = require('../middlewares/methods');
const { getEmployees } = require('../repositories/employeesRepositories');

const router = express.Router();

router.get('/api/employees',getMethod, getEmployees);

module.exports = router;
