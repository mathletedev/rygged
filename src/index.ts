import "dotenv-safe/config";
import Bot from "./bot";

const _ = new Bot(process.env.BOT_TOKEN!);
