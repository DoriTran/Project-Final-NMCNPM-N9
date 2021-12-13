const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.redirect("/user.html");
    // let page = 1;
    // page = parseInt(req.query.number);

    // const users = await axios.get('https://reqres.in/api/users?page=' + page);

    // pageNumber = [];

    // for (i = 1; i <= users.data.total_pages; i++) {
    //     pageNumber.push({number: i});
    // }
    
    // res.render('listUser', {
    //     layout: 'PageLayout',
    //     user: users.data.data,
    //     pageNumber: pageNumber,
    // })
});

router.get('/detail', async (req, res) => {

    const user = await axios.get('https://reqres.in/api/users/' + req.query.id);

    console.log(user);
    
    res.render('detailUser', {
        layout: 'PageLayout',
        avatar: user.data.data.avatar,
        first_name: user.data.data.first_name,
        last_name: user.data.data.last_name,
        id: user.data.data.id,
        email: user.data.data.email,
    })
});

module.exports = router;