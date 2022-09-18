var keystone = require('keystone');

console.log('keystone');
console.log(process.env.MONGO_URI);

keystone.init({

	'name': 'Website Template',

	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://webuser:1234@mongodb/website?authSource=admin',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'cookie-secret'

});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
