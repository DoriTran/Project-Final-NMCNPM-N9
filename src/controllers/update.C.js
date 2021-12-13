const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

router.get('/', async (req, res) => { 
    res.render('updateUser', {
        layout: 'PageLayout',
        id: req.query.id,
    })
});

router.post('/updating', (req, res) => {
    let data = {name: req.body.name, job: req.body.job};

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://reqres.in/api/users/" + req.body.id, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    res.redirect('/list');
});

module.exports = router;