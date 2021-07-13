const express = require('express');
const helpers = require('../router');

const router = express.Router();

router.get('/chicken', (req, res) => {
  helpers.getChicken((err, data) => {
    if (err) {
      res.send(err);
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
