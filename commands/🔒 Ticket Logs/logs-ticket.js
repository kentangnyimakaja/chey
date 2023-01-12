const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');
module.exports = {
	name: "logs-ticket",
	aliases: ["logs"],
	execute: async (client, message, args, data, db) => {
		var prefix = db.fetch(`guildprefix_${message.guild.id}`);
		if (!prefix) {
			var prefix = "==";
		}

		const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
		if (channel.name.includes('ticket-')) {
			if (message.member.hasPermission('ADMINISTRATOR') || channel.name === `ticket-${message.author.id}`) {
				channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await sourcebin.create([
							{
								name: ' ',
								content: output,
								languageId: 'text',
							},
						], {
							title: `Transkrip obrolan untuk ${channel.name}`,
							description: ' ',
						});
					}
					catch (e) {
						return message.channel.send('Terjadi kesalahan, silahkan coba lagi!');
					}

					const embed = new MessageEmbed()
						.setDescription(`[\`📄 View\`](${response.url})`)
						.setColor('GREEN')
						.setTimestamp();
					message.reply('Transkrip sudah lengkap. Silakan klik link di bawah ini untuk melihat transkrip', embed);
				});
			}
		}
		else {
			return message.reply(
				'Anda tidak dapat menggunakan perintah ini di sini. Silakan gunakan perintah ini dalam tiket terbuka.',
			);
		}

	}
}
module.exports.help = {
	name: "logs-ticket",
	description: "Ini akan memberi Anda log tiket",
	usage: "logs-tickets",
	type: "Ticket"
}