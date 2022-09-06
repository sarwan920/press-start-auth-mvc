const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)


///////////////////////////////////////////////////////////////////////
// Materialize Testing Routes:
router.get('/testIndex', homeController.getTestIndex)
router.get('/testLogin', authController.getTestLogin)
router.post('/testLogin', authController.postTestLogin)
router.get('/testLogout', authController.testLogout)

router.get('/testSignup', authController.getTestSignup)
router.post('/testSignup', authController.postTestSignup)
//
///////////////////////////////////////////////////////////////////////
module.exports = router