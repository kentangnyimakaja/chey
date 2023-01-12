const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   execute: async (client, message, args) => {
      if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
         return message.channel.send("Anda tidak memiliki cukup Izin")
      }
      message.channel.overwritePermissions([
         {
            id: message.guild.id,
            deny: ['SEND_MESSAGES'],
         },
      ]);
      const embed = new Discord.MessageEmbed()
         .setTitle("Channel Updates")
         .setDescription(`🔒 ${message.channel} telah terkunci`)
         .setColor("RANDOM")
         .setFooter(`Requested by ${message.author.tag}`)
      await message.channel.send(embed);
      message.delete();
   }
}
module.exports.help = {
   name: "lock",
   description: "Ini Mengunci saluran saat ini",
   usage: "lock",
   type: "Moderation"
}
