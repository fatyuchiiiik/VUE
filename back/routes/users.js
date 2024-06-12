const express = require('express')
const router = express.Router()
const { authJwt } = require ('../middlewares/auth')
const { getUserByUid,addToFavorites,getFavorites,updateUserByUid } = require ('../controllers/users')

router.get('/', [authJwt.verifyToken], getUserByUid);
router.post('/:uid/favorites', [authJwt.verifyToken], addToFavorites);
router.get('/:uid/favorites', [authJwt.verifyToken], getFavorites);
router.put('/:uid', [authJwt.verifyToken], updateUserByUid);
//router.put('/likes', [authJwt.verifyToken], updateLike)


module.exports = router