const express = require('express');
const router = express.Router();

// module controller
const homeCtrl = require('../controllers/home_Controller');

router.get('/home', homeCtrl.renderHomeView);

router.get('/search/all-course', homeCtrl.renderShowAllCourse);

module.exports = router;