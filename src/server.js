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

app.get('/', (req, res) => {
    res.render('main', {
        layout: 'main_layout'
    })
});

app.use(express.static(__dirname + '/public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));