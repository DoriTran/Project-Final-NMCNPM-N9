const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

module.exports.loginCtr_Post = (req, res, next) => {

    const user_info = {

        un: req.body.user_name ? req.body.user_name : undefined,

        up: req.body.password ? req.body.password : undefined,
    }

    // logic ----------------

    return res.redirect('http://localhost:3000/');
}

module.exports.loginCtr_Get = (req, res) => {

    return res.render('login', {
        layout: 'login_signup_layout'
    });
}
