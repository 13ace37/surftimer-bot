module.exports = (message, Client) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(Client.Config.prefix)) return;

	message.rawContent = message.content;
	message.content = message.content.slice(Client.Config.prefix.length);
	message.args = message.content.split(" ");
	message.args.shift();

	console.log(message.rawContent, message.content, message.args);
}