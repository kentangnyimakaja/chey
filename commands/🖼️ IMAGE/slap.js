const Discord = require("discord.js");
const superagent = require("snekfetch");
module.exports = {
  name: "slap",
  aliases: [],
  execute: async(client, message, args, data, db) => {

            const user = message.mentions.users.first();
            if(!user) return message.channel.send({embed: {
                color: 16734039,
                description: "Anda harus menyebutkan seseorang untuk menampar!"
            }});

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "Anda tidak bisa menampar diri sendiri!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/slap')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " Baru saja ditampar oleh " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " ditampar oleh " + message.author.toString()))
              .setFooter(`Itu harus menyakitkan ._.`)
              .setURL(response.body.url)
              .setTimestamp();
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Ada yang tidak beres... :cry:"
            }}));

        }
}
module.exports.help = {
    name: "slap",
    description: "Menampar pengguna",
    usage: "slap <user>",
    type: "Fun" 
}