import { Message, TextChannel } from "eris";
import Bot from "../bot";
import Command from "../commands/command";
import BotEvent from "./event";

export default new BotEvent(async (bot, message: Message<TextChannel>) => {
	if (
		!message.content.startsWith(Bot.PREFIX) ||
		!message.guildID ||
		message.author.bot
	)
		return;

	let args: string[] = message.content
		.slice(Bot.PREFIX.length)
		.toLowerCase()
		.split(" ")
		.map((item: string) => item.trim());

	const name: string = args.shift()!;
	const command: Command | undefined = bot.commands.find(
		(cmd: Command) =>
			cmd.props.name === name || cmd.props.aliases?.includes(name)
	);

	if (!command) return;

	let res = await command.exec({
		bot,
		message,
		args
	});

	if (!res) return;

	message.channel.createMessage(res);
});
