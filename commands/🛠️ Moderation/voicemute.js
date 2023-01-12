module.exports = {
  name: "voicemute",
  aliases: [],
  execute: async (client, message, args, data, db) => {


    if (!message.member.hasPermission("MUTE_MEMBERS")) {
      return;
    }
    let channel = message.member.voice.channel;
    for (let member of channel.members) {
      member[1].voice.setMute(true)
    }
    message.channel.send("Selesai, saya telah mute semua orang yang berada di vc Anda")
  }
}
module.exports.help = {
  name: "voicemute",
  description: "Ini membisukan semua pengguna yang berada di vc",
  usage: "voicemute",
  type: "Moderation"
}
