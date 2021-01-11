const { exec } = require('child_process');
const CONSTANT = require('./constant');

exec(`curl ${CONSTANT.API_URL}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
