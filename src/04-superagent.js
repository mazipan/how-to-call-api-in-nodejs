const superagent = require('superagent');
const CONSTANT = require('./constant');

superagent
  .get(CONSTANT.API_URL)
  .set('accept', 'json')
  .then((res) => {
    console.log(res.body);
  })
  .catch((err) => {
    console.error(err);
  });
