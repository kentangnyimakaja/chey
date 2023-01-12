module.exports = {
  name: "voicekick",
  aliases: [],
  execute: async (client, message, args, data, db) => {


    if (!message.member.hasPermission("UNMUTE_MEMBERS")) {
      return;
    }
    let channel = message.member.voice.channel;
    for (let member of channel.members) {
      member[1].voice.setChannel(null)
    }
    message.channel.send("Selesai, saya telah menendang semua orang yang berada di vc Anda")
  }
}
module.exports.help = {
  name: "voicekick",
  description: "Ini menendang semua pengguna yang ada di vc",
  usage: "voicekick",
  type: "Moderation"
}