module.exports = {
  name: "unlock",
  aliases: [],
  execute: async (client, message, args, data, db) => {


    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      return;
    }
    let channel = message.channel;

    const vc1 = args.join(" ");
    channel.overwritePermissions([
      {
        id: message.guild.roles.everyone.id,
        allow: ['SEND_MESSAGES'],
      },
    ], 'unLockdown');
    message.channel.send("Saluran ini telah dibuka, selamat menikmati.")
  }
}
module.exports.help = {
  name: "unlock",
  description: "Ini membuka kunci saluran saat ini",
  usage: "unlock",
  type: "Moderation"
}