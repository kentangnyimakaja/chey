const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
	name: "t-open",
	aliases: ["re-open"],
	execute: async (client, message, args) => {
		var prefix = db.fetch(`guildprefix_${message.guild.id}`);
		if (!prefix) {
			var prefix = "==";
		}

		if (message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			try {
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				})
					.then(() => {
						message.channel.send(`Berhasil dibuka kembali ${message.channel}`);
					});
			}
			catch (e) {
				return message.channel.send('Terjadi Kesalahan, silakan coba lagi!');
			}
		}
		else {
			return message.reply(
				'Anda tidak dapat menggunakan perintah ini di sini. Silakan gunakan perintah ini pada tiket tertutup.',
			);
		}

	}
}
module.exports.help = {
	name: "t-open",
	description: "Membuka kembali tiket",
	usage: "t-open",
	type: "🎟️ Ticket"
}