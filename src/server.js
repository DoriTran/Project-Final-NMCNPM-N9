// >#> Express Framework
const express = require('express'), app = express(), port = 3000, exphbs = require('express-handlebars');

app.use(express.urlencoded({
    extended: true,
}));

// >#> Handlebar Framework
const hbs = exphbs.create({
    defaultLayout: 'PageLayout',
    extname: 'hbs',
    helpers: {
            ifStr(a,b, options) { if (a === b) {
                return options.fn(this);
            }
            return options.inverse(this);
        }
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine','hbs' );
app.set("views", "./src/views");

/*
    Router Module
*/
const route_login_post = require('./routers/post.login');
const route_register_post = require('./routers/post.register');
const route_home_get = require('./routers/get.home');
const route_course = require('./routers/get.Course');
const route_user = require('./routers/get.User');

app.use('/', route_login_post);
app.use('/', route_register_post);
app.use('/', route_home_get);
app.use('/', route_course);
app.use('/', route_user);

// app.use('/account', require('./controllers/account.C'));

app.use(express.static(__dirname + '/public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));