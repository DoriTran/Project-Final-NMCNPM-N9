const express = require('express');
const router = express.Router();

// module controller
const loginCtrl = require('../controllers/login_Controller');

router.post('/login', loginCtrl.loginCtr_Post);

router.get('/login', loginCtrl.loginCtr_Get);

module.exports = router;