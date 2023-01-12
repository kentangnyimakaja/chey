const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "hug",
    aliases: [],
    execute: async (client, message, args, data, db) => {
        const user = message.mentions.users.first();
        if (!user)
            return message.channel.send({
                embed: {
                    color: 16734039,
                    description: "Anda harus menyebutkan seseorang untuk memberikan pelukan!"
                }
            })
        if (message.author === user) {
            return await message.channel.send({
                embed: {
                    color: 16734039,
                    description: "Anda tidak bisa memeluk diri sendiri!"
                }
            })
        }
        superagent.get('https://nekos.life/api/v2/img/hug')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle(user.username + " Baru saja mendapat pelukan dari " + message.author.username)
                    .setImage(response.body.url)
                    .setColor("RANDOM")
                    .setDescription((user.toString() + " Mendapat pelukan dari " + message.author.toString()))
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
    name: "hug",
    description: "Berikan pelukan kepada pengguna yang disebutkan",
    usage: "hug <user>",
    type: "Fun"
}