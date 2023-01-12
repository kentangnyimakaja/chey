const Discord = require('discord.js');
const fetch = require('node-fetch')
const cnf = require('../../config.js');

module.exports = {
  name: "nobar",
  aliases: [],
  execute: async (client, message, args, data) => {


    let channel = message.member.voice.channel;
    if (!channel) return message.channel.send("Kamu harus berada di voice channel")

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "755600276941176913",
            target_type: 2,
            temporary: false,
            validate: null
        }),
        headers: {
            "Authorization": `Bot ${client.token}`,
            "Content-Type": "application/json"
        }
    })

        .then(res => res.json())
        .then(invite => {
            if (!invite.code) return message.channel.send("Sayangnya aku tidak bisa memulai youtube bersama-sama")
            const e = new Discord.MessageEmbed()
                .setDescription(`[Tekan Disini Untuk Membuka Youtube](https://discord.com/invite/${invite.code})`)
                .setFooter(`Requested by ${message.author.tag}`) // sets a footer
            message.channel.send(e)
        })
}
}

module.exports.help = {
    name: "nobar",
    description: "Nobar Youtube",
    usage: "nobar",
    type: "Fun" 
}