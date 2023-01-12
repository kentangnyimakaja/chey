const Discord = require("discord.js");
const Jimp = require("jimp");
const fs = require("fs");
const Moment = require("moment-timezone");
const fetch = require("node-fetch");
module.exports = {
	name: "tweet",
	aliases: [],
	execute: async (client, message, args, data, db) => {

		const user = message.author.username;
		const text = args.join(" ");




		if (!text) {
			return message.channel.send("images/tweet:MISSING_TEXT");
		}




		try {
			const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
			const json = await res.json();
			const attachment = new Discord.MessageAttachment(json.message, "tweet.png");
			message.channel.send(`${message.author.username} Just Tweeted!!`, attachment)
			message.delete();
		} catch (e) {

			message, channel.send("Terjadi Kesalahan Silakan masuk ke server Dukungan dan hubungi pengembang bot")


		}

	}
}
module.exports.help = {
	name: "tweet",
	description: "Membuat tweet oleh Donald Trump",
	usage: "tweet <message>",
	type: "Fun"
}