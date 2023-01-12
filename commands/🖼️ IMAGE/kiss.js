const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "kiss",
    aliases: [],
    execute: async (client, message, args, data, db) => {
        const user = message.mentions.users.first();
        if (!user)
            return message.channel.send({
                embed: {
                    color: 16734039,
                    description: "You must mention someone to kiss!"
                }
            })

        if (message.author === user) {
            return await message.channel.send({
                embed: {
                    color: 16734039,
                    description: "Anda tidak bisa mencium diri sendiri!"
                }
            })
        }
        superagent.get('https://nekos.life/api/v2/img/kiss')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle(user.username + " Baru saja mendapat ciuman dari " + message.author.username)
                    .setImage(response.body.url)
                    .setColor("RANDOM")
                    .setDescription((user.toString() + " Mendapat ciuman dari " + message.author.toString()))
                    .setFooter(`Ini sangat lucu`)
                    .setURL(response.body.url)
                    .setTimestamp();
                message.channel.send(embed);
            }).catch((err) => message.channel.send({
                embed: {
                    color: 16734039,
                    description: "Ada yang tidak beres... :cry:"
                }
            }));

    }
}
module.exports.help = {
    name: "kiss",
    description: "Mencium pengguna yang disebutkan",
    usage: "kiss <user>",
    type: "Fun"
}