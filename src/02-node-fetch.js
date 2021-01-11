const fetch = require('node-fetch');
const CONSTANT = require('./constant');

fetch(CONSTANT.API_URL)
  .then((res) => res.json())
  .then((json) => console.log(json));
