const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const controller = require('./controller');
const helpers = require('./router');

const app = express();
const port = 3000;

// const id = config.app_id;
// const key = config.app_key;

// TODO: ingredients will be sent down from front end
// Will be an array, use map function to change format to fit api call

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(bodyParser.json());

app.get('/default', controller);
app.use('/beef', controller);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
