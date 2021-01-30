const SurfTimer = {};

SurfTimer.require = {
	Bot: require(__dirname + "/Bot")
}

SurfTimer.Bot = new SurfTimer.require.Bot(require(__dirname + "/../config").mysql);
SurfTimer.Bot.Config = require(__dirname + "/../config");

SurfTimer.Bot.Client.login(SurfTimer.Bot.Config.token); 