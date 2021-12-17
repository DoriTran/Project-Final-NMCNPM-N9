const express = require('express');
const router = express.Router();

// module controller
const courseCtrl = require('../controllers/courseController');

router.get('/course/detail', courseCtrl.renderCourseDetail);


module.exports = router;