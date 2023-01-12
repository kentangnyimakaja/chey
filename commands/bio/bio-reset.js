const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "bio-reset",
  aliases: ['del-bio', 'biography-del', 'res-bio', 'reset-bio'],
  description: "Menampilkan semua perintah bot yang tersedia.",
  execute: async (client, message, args) => {

   db.delete(`biography_${message.author.id}`)
      const aembed = new Discord.MessageEmbed()
   .setDescription("**Berhasil Menghapus Bio Anda**")
   .setTimestamp()
   .setFooter(`Requested by ${message.author.tag}`)
   
   message.channel.send(aembed);

  }
}