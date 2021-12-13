const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let total_pages = 1;

    let search_name = (req.query.name).replace(/[+]/g, " ");

    result_user = [];

    for (page = 1; page <= total_pages; page++) {
        const users = await axios.get('https://reqres.in/api/users?page=' + page);

        total_pages = users.data.total_pages;

        for (const user of users.data.data) {
            if ((user.first_name + " " + user.last_name).includes(req.query.name)) {
                result_user.push(user);
            }
        }
    }
    
    res.render('searchUser', {
        layout: 'PageLayout',
        user: result_user,
    })
});

module.exports = router;