const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

router.get('/', async (req, res) => {  
    res.render('addUser', {
        layout: 'PageLayout',
    })
});

router.post('/adding', (req, res) => {
    let data = {name: req.body.name, job: req.body.job};

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    res.redirect('/list');
});

module.exports = router;