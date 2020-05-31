import Discord from 'discord.js';
import * as config from './config.json';
import * as dispatcher from './messageHandlers';

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(config.prefix)) {
    dispatcher.dispatchMessage(msg);
  }
});


client.login(config.token).catch(err => console.log(err));
