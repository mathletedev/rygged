import { EmbedFooterOptions, User } from "eris";
import Bot from "../bot";

export default class Utils {
	private bot: Bot;

	public constructor(bot: Bot) {
		this.bot = bot;
	}

	public getFooter(user: User, text: string = ""): EmbedFooterOptions {
		return {
			text: `${user.username}${text === "" ? "" : ` | ${text}`}`,
			icon_url: user.dynamicAvatarURL("png")
		};
	}
}
