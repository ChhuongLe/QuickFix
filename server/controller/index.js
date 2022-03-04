const express = require('express');
const helpers = require('../router');

const router = express.Router();

router.get('/default', (req, res) => {
  helpers.getDefault((err, data) => {
    if (err) {
      res.send(err);
      console.log('something went wrong');
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/beef', (req, res) => {
  helpers.getBeef((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/vegan', (req, res) => {
  helpers.getVegan((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.get('/vegetarian', (req, res) => {
  helpers.getVegetarian((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
