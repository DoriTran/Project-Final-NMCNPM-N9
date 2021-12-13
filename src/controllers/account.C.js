const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

router.get('/', async (req, res) => {  
    res.render('addUser', {
        layout: 'PageLayout',
    })
});

router.post('/signup', (req, res) => {
    res.render('main', {
        layout: 'login_signup_layout'
    })
});

router.post('/signin', (req, res) => {

});

module.exports = router;