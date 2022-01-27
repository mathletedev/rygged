import { Message, TextChannel } from "eris";
import Bot from "../bot";

export interface MessageArgs {
	bot: Bot;
	message: Message<TextChannel>;
	args: any[];
}

export interface CommandArgs {
	name: string;
	aliases?: string[];
}
