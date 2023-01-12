const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

module.exports = {
    name: "uptime",
    aliases: [],
    execute: async (client, message, args, data, db) => {

        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        let embed = new Discord.MessageEmbed()
            .setTitle("Uptime")
            .setDescription(`${duration}`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`)

        message.channel.send(embed);
    }
}

module.exports.help = {
    name: "uptime",
    description: "Tampilkan waktu aktif bot",
    usage: "uptime",
    type: "General"
}