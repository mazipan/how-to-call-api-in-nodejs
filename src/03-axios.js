const axios = require('axios');
const CONSTANT = require('./constant');

axios
  .get(CONSTANT.API_URL)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
