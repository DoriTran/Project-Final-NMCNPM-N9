const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

module.exports.registerCtr_Post = (req, res) => {

    // logic ----------------

    return res.redirect('http://localhost:3000/');
}

module.exports.registerCtr_Get = (req, res) => {

    return res.render('signup', {
        layout: 'login_signup_layout'
    });
}
