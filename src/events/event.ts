import Bot from "../bot";

export default class BotEvent {
  private event: (bot: Bot, ...args: any[]) => Promise<any>;

  public constructor(event: (bot: Bot, ...args: any[]) => Promise<any>) {
    this.event = event;
  }

  public async fire(bot: Bot, ...args: any[]) {
    this.event(bot, ...args);
  }
}
