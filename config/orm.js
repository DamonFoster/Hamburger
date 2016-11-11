// 13. Import (require) connection.js into orm.js
// 14. In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.

var connections = require('./connection');

var orm = {
	selectAll: function() {
	connection.query('SELECT ?? FROM ??', [*, 'burgers'], function(err, results) {
	}
)};
	insertOne: function(name) {
	connection.query('INSERT INTO ?? VALUES (??);', ['burgers', name], function(err, results) {
	}
)};
	updateOne: function(name) {
	connection.query('UPDATE burgers FROM ?? SET devoured=1,' ['burgers'], function(err, results) {
	}
)};
};

module.exports = orm;

