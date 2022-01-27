import "dotenv-safe/config";
import Command from "./command";

export default new Command(
	{ name: "coinflip", aliases: ["coin", "flip", "heads"] },
	async ({ bot, message }) => {
		const won =
			Math.random() < (message.author.id === process.env.BOT_OWNER ? 0.8 : 0.4);

		return {
			embed: {
				title: "🪙 coin flip",
				description: `the coin landed on ${won ? "heads" : "tails"}. you ${
					won ? "won!" : "lost."
				}`,
				color: bot.colors.blue,
				footer: bot.utils.getFooter(message.author),
				timestamp: new Date()
			},
			messageReference: { messageID: message.id }
		};
	}
);
