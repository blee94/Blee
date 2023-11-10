const express = require('express');
const app = express();
const multer = require('multer');
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

// const router = require('./routes');
// const { signup } = require('./controller/Cuser');

app.get('/signup', (req, res) => {
  res.render('signup');
});
app.get('/signip', (req, res) => {
  res.render('signip');
});
app.get('/detail', (req, res) => {
  res.render('detail');
});
app.get('/findid', (req, res) => {
  res.render('findid');
});
app.get('/findpw', (req, res) => {
  res.render('findpw');
});

// app.use('/', router);

app.get('*', function (req, res) {
  res.send('페이지를 찾을수 없습니다');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
