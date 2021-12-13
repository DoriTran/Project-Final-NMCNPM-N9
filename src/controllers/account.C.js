const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {  
    res.render('login_signup', {
        layout: 'login_signup_layout'
    });
});

module.exports = router;