const express = require('express')
const router = express.Router()
const gameController = require('../controllers/games') 
const { ensureAuth } = require('../middleware/auth')

////////////////////////////////////////////////////////////////////////////
// ** ATTN: these are the routes to test the Schema config **
router.post('/testGameSchema', gameController.testGameSchema)
router.post('/testUserSchema', gameController.testUserSchema)
//
////////////////////////////////////////////////////////////////////////////

module.exports = router