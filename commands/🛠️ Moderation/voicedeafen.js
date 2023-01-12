module.exports = {
  name: "voicedeafen",
  aliases: [],
  execute: async (client, message, args, data, db) => {


    if (!message.member.hasPermission("UNMUTE_MEMBERS")) {
      return;
    }
    let channel = message.member.voice.channel;
    for (let member of channel.members) {
      member[1].voice.setDeaf(true)
    }
    message.channel.send("Selesai saya telah deafen semua orang yang ada di vc Anda")
  }
}
module.exports.help = {
  name: "voicedeafen",
  description: "Ini deafen semua pengguna yang ada di vc",
  usage: "voicedeafen",
  type: "Moderation"
}