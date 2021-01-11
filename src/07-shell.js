const { exec } = require('shelljs');
const CONSTANT = require('./constant');

exec(`curl ${CONSTANT.API_URL}`, { silent: true }, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
