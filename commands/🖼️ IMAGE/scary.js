const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "scary",
  aliases: [],
  execute: async(client, message, args, data, db) => {
 
let AmeAPI = new AmeClient(client.config.imageapi);
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const buffer = await AmeAPI.generate("scary", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "approved.png");
	
		message.channel.send(attachment);

	}
}
  module.exports.help = {
    name: "scary",
    description: "Mengirim foto menakutkan dari orang yang disebutkan ",
    usage: "scary",
    type: "Image" 
}
