const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "waifu",
    aliases: [],
    execute: async (client, message, args, data, db) => {

        superagent.get('https://nekos.life/api/v2/img/waifu')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                    .setDescription(message.author.toString() + " Ini waifumu!")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                    .setURL(response.body.url)
                    .setTimestamp()
                    .setFooter(`Requested by ${message.author.tag}`)
                message.channel.send(embed);
            }).catch((err) => message.channel.send({
                embed: {
                    color: 16734039,
                    description: "Ada yang salah... :cry:"
                }
            }));

    }
}
module.exports.help = {
    name: "waifu",
    description: "Tampilkan gambar waifu acak",
    usage: "waifu",
    type: "Fun"
}

