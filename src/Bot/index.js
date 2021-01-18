module.exports = class Bot {
	constructor () {
		this.init();
	}

	init() {
		this.Discord = require("discord.js");
		this.Client = new this.Discord.Client;
		this.Client.on("message", (message) => require(__dirname + "/commandHandler")(message, this));
	}
}