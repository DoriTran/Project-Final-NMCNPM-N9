const { default: axios } = require('axios');
const NguoiDung = require('../models/NguoiDung');
const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {  
//     res.render('login', {
//         layout: 'login_signup_layout'
//     });
// });

router.get('/load', (req, res) => {
    myuser = NguoiDung.all();
    console.log(myuser);
    res.redirect('/');
});

router.get('/up', (req, res) => {
    NguoiDung.upload();
    res.redirect('/');
});

module.exports = router;