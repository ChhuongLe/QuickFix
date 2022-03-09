const axios = require('axios');
const config = require('../../config');

const getDefault = (callback) => {
  const options = {
    url: `${config.url}&apiKey=${config.app_key}&tags=chicken`,
  };
  axios(options)
    .then((res) => {
      callback(null, res.data);
    })
    .catch((err) => {
      callback(`ERROR: ${config.url}`, err);
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
  getDefault,
  getBeef,
  getVegan,
  getVegetarian,
};
