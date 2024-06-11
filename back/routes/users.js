const express = require('express')
const router = express.Router()
const { authJwt } = require ('../middlewares/auth')
const { getUserByUid } = require ('../controllers/users')

router.get('/', [authJwt.verifyToken], getUserByUid)
//router.put('/likes', [authJwt.verifyToken], updateLike)


module.exports = router