module.exports = {
  name: "voiceunmute",
  aliases: [],
  execute: async (client, message, args, data, db) => {


    if (!message.member.hasPermission("UNMUTE_MEMBERS")) {
      return;
    }
    let channel = message.member.voice.channel;
    for (let member of channel.members) {
      member[1].voice.setMute(false)
    }
    message.channel.send("Selesai, saya telah unmuted semua orang yang ada di vc anda")
  }
}
module.exports.help = {
  name: "voiceunmute",
  description: "Ini memberikan unmuted ke semua pengguna yang berada di vc",
  usage: "voiceunmute",
  type: "Moderation"
}
