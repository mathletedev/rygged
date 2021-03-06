import Command from "./command";

export default new Command(
	{ name: "ping", aliases: ["lag", "latency"] },
	async ({ bot, message }) => {
		let ping = await message.channel.createMessage({
			content: "ping?",
			messageReference: { messageID: message.id }
		});

		ping.edit({
			embed: {
				title: "š pong!",
				description: `āÆ ā ${Math.round(
					ping.createdAt - message.createdAt
				)} ms\n\nāÆ š ${message.channel.guild.shard.latency.toFixed()} ms`,
				color: bot.colors.blue,
				footer: bot.utils.getFooter(message.author),
				timestamp: new Date()
			},
			messageReference: { messageID: message.id }
		});
	}
);
