const axios = require('axios');
const config = require('../../config');

const getChicken = (callback) => {
  const options = {
    url: `${config.url}&app_id=${config.app_id}&app_key=${config.app_key}&q=chicken`,
  };
  axios(options)
    .then((res) => {
      callback(null, res.data.hits);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getBeef = (callback) => {
  const options = {
    url: `${config.url}&app_id=${config.app_id}&app_key=${config.app_key}&q=beef`,
  };
  axios(options)
    .then((res) => {
      callback(null, res.data.hits);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getVegan = (callback) => {
  const options = {
    url: `${config.url}&app_id=${config.app_id}&app_key=${config.app_key}&q=eggplant&health=vegan`,
  };
  axios(options)
    .then((res) => {
      callback(null, res.data.hits);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getVegetarian = (callback) => {
  const options = {
    url: `${config.url}&app_id=${config.app_id}&app_key=${config.app_key}&q=tofu&health=vegetarian`,
  };
  axios(options)
    .then((res) => {
      callback(null, res.data.hits);
    })
    .catch((err) => {
      callback(err, null);
    });
};
module.exports = {
  getChicken,
  getBeef,
  getVegan,
  getVegetarian,
};
