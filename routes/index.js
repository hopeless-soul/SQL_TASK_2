const express = require('express')
const router = express.Router();

const tasks = require('./tasks')
const dashboard = require('./dashboard')

router.use('/tasks', tasks)
router.use('/dashboard', dashboard)

router.use(express.urlencoded({ extended: true }));

module.exports = router;