const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

module.exports.renderHomeView = (req, res) => {

    res.render('main', {
        layout: 'main_layout'
    });
}

module.exports.renderShowAllCourse = (req, res) => {

    res.render('all_courses', {

        layout: 'sub_layout'
    });
};