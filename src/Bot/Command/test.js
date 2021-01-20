let Command = require(".");

module.exports = class extends Command {
	run() {
		this.reply("test :)");
	}
}