const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "poll",
  aliases: ["question"],
  execute: async(client, message, args, data, db) => {

const pollmessage = await args.join(" ");


var pollrandom = ["✅", "❌",];  

if (pollmessage.length <= 0) return message.channel.send({embed: {
            color: 16734039,
            description: "Anda harus menyediakan teks untuk mengajukan pertanyaan!"
        }})
const embed = new Discord.MessageEmbed()
.setTitle(":ballot_box: " +`${message.author.username}` + " Pemungutan suara telah dimulai! Bereaksi dengan emoji untuk memilih! :ballot_box:",)
.setColor("RANDOM")
.addField("Poll", pollmessage,)
.setFooter("Note: Voting akan berakhir dalam 30 detik!")
.setTimestamp()
const pollTopic = await message.channel.send({embed})
await pollTopic.react(`✅`);
await pollTopic.react(`❌`);
// Create a reaction collector
const filter = (reaction) => reaction.emoji.name === '✅';
const collector = pollTopic.createReactionCollector(filter, { time: 30000 });
collector.on('end', collected => message.channel.send({embed: {
            color: 3447003,
            title: ":tada: Dikumpulkan " + `${collected.size}` + " suara positif! :tada:",
			description: "Jawaban saya adalah: " + pollrandom[Math.floor(Math.random()*pollrandom.length)] + ", tapi aku takut untuk memilih."
        }})
);
}
}
module.exports.help = {
    name: "poll",
    description: "Buat polling",
    usage: "poll <poll1> <poll2>",
    type: "Fun"  
}