const express = require('express');
const path = require('path');
const config = require('../config');

const app = express();
const port = 3000;

// const id = config.app_id;
// const key = config.app_key;

// TODO: ingredients will be sent down from front end
// Will be an array, use map function to change format to fit api call

app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('/yes', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
