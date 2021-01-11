const got = require('got');
const CONSTANT = require('./constant');

(async () => {
	try {
		const response = await got(CONSTANT.API_URL);
		console.log(response.body);
	} catch (error) {
		console.log(error);
	}
})();
