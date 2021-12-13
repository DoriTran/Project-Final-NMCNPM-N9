const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

router.post('/', (req, res) => { 
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://reqres.in/api/users/" + req.body.id, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    res.redirect('/list');
});

module.exports = router;