const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "bio-check",
  aliases: ['chk-bio', 'biography-check', 'check-bio'],
  description: "Menampilkan semua perintah bot yang tersedia.",
  execute: async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if(args[0])
{
var checking = db.fetch(`biography_${user.id}`);
} else {
  var checking = db.fetch(`biography_${message.author.id}`);
}
   const aembed = new Discord.MessageEmbed()
   .setDescription("**Berhasil**")
   .addField("Bio:", checking)
   .setTimestamp()
   .setFooter(`Requested by ${message.author.tag}`)
   message.channel.send(aembed);
  }
}