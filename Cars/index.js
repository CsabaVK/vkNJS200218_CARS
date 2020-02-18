/* eslint-disable require-jsdoc */
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejs = require('ejs');

app.use('/public', express.static('Application/Style'));

app.set('views', path.join(__dirname, 'Application/Templates'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('layout');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
