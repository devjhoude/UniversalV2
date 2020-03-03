const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

//loading messages
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.setInterval(async () => {
	let players = 0;
	let player = await axios.get(`http://51.91.170.34:30120/players.json`, { responseType: 'json', timeout: 10000 });
	players =+ player.data.length;
	console.log('Actualisation complete du Status du bot, Changement du nombre de joueurs')
	client.user.setActivity('En ligne : ' + players + '/64', {type: "PLAYING"});
  }, 1 * 5000
  );

client.login(settings.token);