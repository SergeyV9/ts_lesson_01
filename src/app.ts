// const { Telegraf } = require('telegraf');
import { Telegraf } from 'telegraf';

const bottoken = "5681165044:AAFRDAlJ1t3SQ2j65tGQ1GrFQVSkaMg4jbI"

const bot = new Telegraf(bottoken);
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));