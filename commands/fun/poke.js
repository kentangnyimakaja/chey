const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports = {
  name: "poke",
  aliases: [],
  execute: async(client, message, args) => {
            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "Anda harus menyebutkan seseorang untuk dicolek!"
            }})

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "Anda tidak bisa menyodok diri sendiri!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/poke')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " baru saja ditusuk " + message.author.username)
              .setImage(response.body.url)
              .setColor("RANDOM")
              .setDescription((user.toString() + " ditusuk oleh " + message.author.toString()))
              .setFooter(`rip`)
              .setURL(response.body.url)
              .setTimestamp()
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Ada yang tidak beres... :cry:"
            }}));

        }
        }
module.exports.help = {
    name: "poke",
    description: "Ajukan pengguna sebutan",
    usage: "poke <user>",
    type: "Fun" 
}