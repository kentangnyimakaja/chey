const Discord = require('discord.js')
const db = require('quick.db')


module.exports = {
  name: "messages",
  aliases: [],
  execute: async(client, message, args) => {
  var user = message.mentions.members.first();
  if(!user)
  {
    var user = message.author;
  }
const embed1 = new Discord.MessageEmbed()
.setDescription("Saya mendapatkan data Penghitungan Pesan Anda")
.setTimestamp()
.setFooter(`Requested by ${message.author.tag}`)
let broov1 = db.fetch(`messages_${message.guild.id}_${user.id}`);
const embed = new Discord.MessageEmbed()
.addField(`Anda telah mengetik`, `${broov1} Pesan!!`)
.setFooter("1 Pesan akan disimpan dalam data dalam 5 detik untuk menghindari pesan spam")
.setTimestamp()
.setFooter(`Requested by ${message.author.tag}`)
message.channel.send(embed1).then(msg=>{
  msg.edit(embed)
})


}
  }
module.exports.help = {
    name: "messages",
    description: "Ini menunjukkan berapa kali Anda telah Mengirim Pesan",
    usage: "messages",
    type: "Fun"  
}