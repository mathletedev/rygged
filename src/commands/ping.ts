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
				title: "🏓 pong!",
				description: `❯ ⌛ ${Math.round(
					ping.createdAt - message.createdAt
				)} ms\n\n❯ 💓 ${message.channel.guild.shard.latency.toFixed()} ms`,
				color: bot.colors.blue,
				footer: bot.utils.getFooter(message.author),
				timestamp: new Date()
			},
			messageReference: { messageID: message.id }
		});
	}
);
