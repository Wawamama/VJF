var express = require('express')
var router = express.Router()
const { testApp } = require('../controllers/testApp')

// Go to this route on root
router.get('/', testApp)

module.exports = router
