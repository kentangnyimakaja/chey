const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "cuddle",
    aliases: ["pyaar"],
    execute: async (client, message, args, data, db) => {
        const user = message.mentions.users.first();

        if (!user)
            return message.channel.send({
                embed: {
                    color: 16734039,
                    description: "Anda harus menyebutkan seseorang untuk berpelukan!"
                }
            })

        superagent.get('https://nekos.life/api/v2/img/cuddle')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle(user.username + " Baru saja mendapat pelukan dari " + message.author.username)
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setDescription((user.toString() + " Mendapat pelukan dari " + message.author.toString()))
                    .setFooter(`Ini sangat lucu`)
                    .setURL(response.body.url)
                    .setTimestamp()
                    .setFooter(`Requested by ${message.author.tag}`)
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
    name: "cuddle",
    description: "Berikan pelukan untuk menyebutkan pengguna",
    usage: "cuddle <user>",
    type: "Fun"
}