const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: db,
	pool: {
		min: 2,
		max: 20
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};