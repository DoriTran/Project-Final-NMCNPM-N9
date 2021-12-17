const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

module.exports.renderUserInfo = (req, res) => {

    res.render('personalpage', {
        layout: 'sub_layout'
    });
}