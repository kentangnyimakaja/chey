const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
	name: "t-close",
	aliases: [],
	execute: async (client, message, args) => {
		var prefix = db.fetch(`guildprefix_${message.guild.id}`);
		if (!prefix) {
			var prefix = "==";
		}

		if (message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if (message.member.hasPermission('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
				message.channel.messages.fetch().then(async (messages) => {
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
							title: `Transkrip obrolan untuk ${message.channel.name}`,
							description: ' ',
						});
					}
					catch (e) {
						return message.channel.send('Terjadi kesalahan, silakan coba lagi!');
					}

					const embed = new Discord.MessageEmbed()
						.setDescription(`[\`📄 View\`](${response.url})`)
						.setColor('GREEN')
						.setTimestamp()
						.setFooter(`Requested by ${message.author.tag}`)
					member.send('Berikut adalah transkrip tiket Anda, silakan klik tautan di bawah ini untuk melihat transkripnya', embed);
				}).then(() => {
					try {
						message.channel.updateOverwrite(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send(`Berhasil menutup ${message.channel}`);
						});
					}
					catch (e) {
						return message.channel.send('Terjadi kesalahan, silakan coba lagi!');
					}
				});
			}
		}
		else {
			return message.reply('Anda tidak dapat menggunakan perintah ini di sini. Silakan gunakan perintah ini saat Anda menutup tiket.');
		}

	}
}
module.exports.help = {
	name: "t-close",
	description: "Ini akan menutup tiket",
	usage: "t-close",
	type: "🎟️ Ticket"
}