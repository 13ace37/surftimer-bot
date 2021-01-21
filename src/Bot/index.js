module.exports = class Bot {
	constructor () {
		this.init();
		this.registerCommands();
	}

	init() {
		this.Discord = require("discord.js");
		this.Client = new this.Discord.Client;
		this.Client.on("message", (message) => require(__dirname + "/commandHandler")(message, this));
	}

	registerCommands() {
		this.Commands = {};

		require("fs").readdir(__dirname + "/Command/", (error, file) => {
			this.Commands.raw = file.filter(f => f.split(".").pop() === "js" && f.split(".")[0] != "index");
			if (this.Commands.raw.length <= 0) return;
			this.Commands.raw.forEach(Command => {
				this.Commands[Command.split(".")[Command.split(".").length - 2]] = new require(__dirname + "/Command/" + Command);
			});
			delete this.Commands.raw;
		});
	}
}