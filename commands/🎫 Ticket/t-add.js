const db = require("quick.db")
module.exports = {
	name: "t-add",
	aliases: ["personadd", "addperson"],
	execute: async (client, message, args) => {
		var prefix = db.fetch(`guildprefix_${message.guild.id}`);
		if (!prefix) {
			var prefix = "==";
		}
		if (!message.member.hasPermission("MANAGE_SERVER")) {
			return;
		}
		if (message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if (!member) {
				return message.channel.send(`Penggunaan yang Salah! Penggunaan yang Benar : ${prefix}t-add <member>`);
			}
			try {
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				}).then(() => {
					message.channel.send(`Berhasil menambahkan ${member} ke ${message.channel}`);
				});
			}
			catch (e) {
				return message.channel.send('Terjadi kesalahan, silakan coba lagi!');
			}
		}

	}
}