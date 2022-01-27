import { Client } from "eris";
import { readdirSync } from "fs";
import { join } from "path";
import Command from "./commands/command";
import { COLORS } from "./utils/colors";
import Utils from "./utils/utils";

export default class Bot {
	public static PREFIX = "?";

	private client: Client;
	public commands: Command[] = [];
	public utils = new Utils(this);
	public colors = COLORS;

	public constructor(token: string) {
		this.client = new Client(token, { intents: ["guilds", "guildMessages"] });

		this.listen();
		this.loadCommands();

		this.client.editStatus("dnd", { type: 3, name: "your money vanish" });

		this.client.connect();
	}

	private listen() {
		for (const event of readdirSync(join(__dirname, "events"))) {
			if (event !== "event.js")
				this.client.on(event.slice(0, event.length - 3), (...args) =>
					require(join(__dirname, "events", event)).default.fire(this, ...args)
				);
		}
	}

	private loadCommands() {
		for (const command of readdirSync(join(__dirname, "commands"))) {
			if (command !== "command.js")
				this.commands.push(
					require(join(__dirname, "commands", command)).default as Command
				);
		}
	}
}
