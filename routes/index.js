const express = require('express')
const router = express.Router();

// const tasks = require('./tasks')
const lists = require('./lists')
const dashboard = require('./dashboard')
const collection = require('./collection')

// router.use('/tasks', tasks)
router.use('/lists', lists)
router.use('/collection', collection)
router.use('/dashboard', dashboard)

router.use(express.urlencoded({ extended: true }));

module.exports = router;