const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "bio-set",
  aliases: ['set-bio', 'biography-set'],
  description: "Menampilkan semua perintah bot yang tersedia.",
  execute: async (client, message, args) => {
   let tosave = args.join(" ");
   if(!args[0]){
     var errembed = new Discord.MessageEmbed()
    .setDescription("**Failed**")
    .addField("Error :", `Anda Tidak Memberi saya Bio untuk Ditetapkan`)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(errembed)
   }
   if(tosave.length > 40) {
       var errembed = new Discord.MessageEmbed()
    .setDescription("**Failed**")
    .addField("Error :", `Bio Anda Terlalu Panjang. Kami tidak mengizinkan Lebih dari 40 Karakter dalam Biografi`)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(errembed)
   }
   db.set(`biography_${message.author.id}`, tosave);

   const aembed = new Discord.MessageEmbed()
   .setDescription("**Berhasil**")
   .addField("Bio to Set:", tosave)
   .setTimestamp()
   .setFooter(`Requested by ${message.author.tag}`)
   message.channel.send(aembed);

  }
}