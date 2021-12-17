const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const KhoaHoc = require('../models/KhoaHoc');

module.exports.renderHomeView = (req, res) => {
    KhoaHoc.SortByRate();

    KhoaByRate = KhoaHoc.all();

    AnhKhoaHoc = [];

    console.log(KhoaByRate);
    //KhoaByRate = KhoaByRate.slice(0, 6);

    res.render('main', {
        layout: 'main_layout',
    });
}

module.exports.renderShowAllCourse = (req, res) => {
    res.render('all_courses', {
        layout: 'sub_layout'
    });
};