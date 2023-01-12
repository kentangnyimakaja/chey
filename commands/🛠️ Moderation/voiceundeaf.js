module.exports = {
  name: "voiceundeaf",
  aliases: [],
  execute: async (client, message, args, data, db) => {


    if (!message.member.hasPermission("UNMUTE_MEMBERS")) {
      return;
    }
    let channel = message.member.voice.channel;
    for (let member of channel.members) {
      member[1].voice.setDeaf(false)
    }
    message.channel.send("Selesai, saya telah menghentikan semua orang yang berada di vc anda")
  }
}
module.exports.help = {
  name: "voiceundeaf",
  description: "Ini memberikan undeafen ke semua pengguna yang berada di vc",
  usage: "voiceundeaf",
  type: "Moderation"
}