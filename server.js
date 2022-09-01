const express = require('express');
const cors = require('cors');
const compression = require('compression');
const app = express();
const path = require('path');
const hbs = require('hbs');


const routerHome = require('./routes/homeRouter');
const routerHomeUpdate = require('./routes/homeRouter');
const routerProducts = require('./routes/productsRouter');
const routerUpdate = require('./routes/productsRouter');
const routerDelete = require('./routes/productsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(compression());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', routerHome);
app.post('/newProduct', routerHomeUpdate);
app.use('/products', routerProducts);
app.post('/products', routerUpdate);
app.post('/delete', routerDelete);

module.exports = app;