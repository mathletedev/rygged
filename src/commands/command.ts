import { MessageContent } from "eris";
import { CommandArgs, MessageArgs } from "../utils/types";

export default class Command {
	public props: CommandArgs;
	private _exec: (messageArgs: MessageArgs) => Promise<MessageContent | void>;

	public constructor(
		props: CommandArgs,
		exec: (messageArgs: MessageArgs) => Promise<MessageContent | void>
	) {
		this.props = props;
		this._exec = exec;
	}

	public exec({ bot, message, args }: MessageArgs) {
		return this._exec({ bot, message, args });
	}
}
