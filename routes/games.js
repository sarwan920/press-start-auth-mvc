const express = require('express')
const router = express.Router()
const gameController = require('../controllers/games') 
const { ensureAuth } = require('../middleware/auth')

////////////////////////////////////////////////////////////////////////////
// ** ATTN: these are the routes to test the Schema config **
router.post('/testGameSchema', gameController.testGameSchema)
router.post('/testUserSchema', gameController.testUserSchema)

// router.get('/getGames', gameController.getGames)












// ** ATTN: Materialize Testing Routes:
router.get('/testGames', gameController.getTestGames)
router.post('/testGames', gameController.postTestGames)
router.get('/testSignup', gameController.getTestSignup)
router.post('/testMarkDone', gameController.postTestMarkDone)
router.get('/testRandomGame', gameController.getTestRandomGame)


//
////////////////////////////////////////////////////////////////////////////


module.exports = router