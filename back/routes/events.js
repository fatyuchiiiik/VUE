const express = require('express');
const router = express.Router();
const controller = require('../controllers/events')
router.post('/add', controller.addevent);
router.get('/getallevents', controller.getallevents)
router.get('/:uid', controller.getEventById);
module.exports = router;