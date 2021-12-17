const express = require('express');
const router = express.Router();

// module controller
const userCtrl = require('../controllers/UserController');

router.get('/user/info', userCtrl.renderUserInfo);


module.exports = router;