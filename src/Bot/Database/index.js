module.exports = class Database {

	constructor(Config) {

		this.createDatabaseConnection(Config);

	}

	createDatabaseConnection(Config) {

		this.Connection = require("mysql").createConnection(Config); 

	}


}