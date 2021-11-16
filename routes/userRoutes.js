var express = require('express')
var router = express.Router()
const {
	signUp,
	signIn,
	favorites,
	favoritesAdd,
	favoritesDel,
	updateUser,
	history,
	getUserInfo,
	getAllergies,
	delAllergies,
	updateUserAddress,
	addToBlacklist,
	donts,
	adddonts,
	deletedonts,
	updateDiet,
} = require('../controllers/userController')

// AUTH ROUTES
router.post('/sign-up', signUp)
router.post('/sign-in', signIn)

// PROFILE ROUTES
router.get('/me/:token', getUserInfo)
router.post('/update-useraddress/:token', updateUserAddress)
router.put('/update-me/:token', updateUser)
router.put('/update-diet', updateDiet)

// FAVORITES
router.get('/favorites/:token', favorites)
router.post('/favorites', favoritesAdd)
router.delete('/favorites/:token/:meal_id', favoritesDel)

// HISTORY
router.get('/history/:token', history)

// ALLERGIES
router.get('/allergies/:token/', getAllergies)
router.delete('/delallergies/:token/:allergy', delAllergies)

// ADD TO BLACKLIST
router.put('/blacklist/:token', addToBlacklist)

// DONTS (undesired ingredients)
router.get('/myDonts/:token', donts)
router.post('/adddonts/:token', adddonts)
router.delete('/deletedonts/:token/:dont', deletedonts)

module.exports = router
