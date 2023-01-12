const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "tickle",
    aliases: [],
    execute: async (client, message, args, data, db) => {

        const user = message.mentions.users.first();
        if (!user)
            return message.channel.send({
                embed: {
                    color: 16734039,
                    description: "Anda harus menyebutkan seseorang untuk menggelitik!"
                }
            });
        if (message.author === user) {
            return await message.channel.send({
                embed: {
                    color: 16734039,
                    description: "Anda tidak bisa menggelitik diri sendiri!"
                }
            })
        }
        superagent.get('https://nekos.life/api/v2/img/tickle')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle(user.username + " Baru saja digelitik oleh " + message.author.username)
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setDescription((user.toString() + " digelitik oleh " + message.author.toString()))
                    .setFooter(`._.`)
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
    name: "tickle",
    description: "Menggelitik pengguna",
    usage: "tickle <user>",
    type: "Fun"
}

