const express = require('express');
const router = express.Router();

// module controller
const lregisterCtrl = require('../controllers/register_Controller');

router.post('/register', lregisterCtrl.registerCtr_Post);

router.get('/register', lregisterCtrl.registerCtr_Get);

module.exports = router;