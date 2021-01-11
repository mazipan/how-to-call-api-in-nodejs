const https = require('https');
const CONSTANT = require('./constant');

https.get(CONSTANT.API_URL, (res) => {
  res.on('data', (d) => {
    process.stdout.write(d);
  });
}).on('error', (e) => {
  console.error(e);
});
