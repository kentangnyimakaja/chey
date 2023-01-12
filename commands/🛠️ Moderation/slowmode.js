




module.exports = {
  name: "slowmode",
  aliases: [],
  execute: async (client, message, args, data, db) => {


    if (!message.member.hasPermission("UNMUTE_MEMBERS")) {
      return;
    }
    let channel = message.channel;
    const vc1 = args.join(" ");
    const member = message.member;
    channel.setRateLimitPerUser(vc1, `Responsible - ${member}`);
    message.channel.send(`Selesai, saya memiliki mode lambat saluran ini untuk ${vc1}s ke ${channel}`)
  }
}
module.exports.help = {
  name: "slowmode",
  description: "Ini Mengubah mode lambat saluran saat ini",
  usage: "slowmode <SECONDS>",
  type: "Moderation"
}

