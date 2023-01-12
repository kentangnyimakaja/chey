const { MessageEmbed } = require('discord.js')
module.exports = {
   name: "randomav",
   aliases: ["randomavatar", "rav"],
   execute: async (client, message, args) => {
      var user = client.users.cache.random();
      var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
      if (avatar1.includes("embed/")) {
         var user = client.users.cache.random();
         var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
      }
      if (avatar1.includes("embed/")) {
         var user = client.users.cache.random();
         var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
      }
      if (avatar1.includes("embed/")) {
         var user = client.users.cache.random();
         var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
      }
      if (avatar1.includes("embed/")) {
         var user = client.users.cache.random();
         var avatar1 = user.displayAvatarURL({ size: 4096, dynamic: true });
      }
      const embed = new MessageEmbed()
         .setTitle('RANDOM AVATAR')
         .setFooter(`${user.tag}'s avatar  | Jangan gunakan avatar ini tanpa izin Pemilik`)
         .setColor("RANDOM")
         .setImage(`${user.displayAvatarURL({ size: 4096, dynamic: true })}`)
         .setTimestamp();
      message.channel.send(embed)
   }
}
module.exports.help = {
   name: "randomav",
   description: "Mengirim avatar random ",
   usage: "randomav",
   type: "Image"
}