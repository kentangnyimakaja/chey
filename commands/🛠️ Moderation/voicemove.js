module.exports = {
  name: "voicemove",
  aliases: [],
  execute: async (client, message, args, data, db) => {

    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = "==";
    }
    if (!message.member.hasPermission("MOVE_MEMBERS")) {
      return;
    }
    let args1 = args.join(" ");
    if (!args1) {
      message.channel.send(`Anda tidak memberi saya id pengembang vc, bergabunglah dengan saluran suara yang ingin Anda seret dan lakukan ${prefix}vcid setelah itu`)
    }

    const vc1 = args1;
    const channel = message.member.voice.channel;
    for (let member of channel.members) {
      member[1].voice.setChannel(vc1)
    }
    message.channel.send(`SELESAI SAYA TELAH MEMINDAHKAN SEMUA PENGGUNA KE <@#${args1}>`);
  }


}

module.exports.help = {
  name: "voicemove",
  description: "Ini memindahkan semua pengguna yang ada di vc",
  usage: "voicemove <vc_developer_id>",
  type: "Moderation"
}
