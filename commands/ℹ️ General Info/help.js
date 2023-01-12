const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "help",
  aliases: ['h', 'helppls'],
  description: "Menampilkan semua perintah bot yang tersedia.",
  execute: async (client, message, args) => {

    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = "==";
    }
    const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];
      var commandnum = [];
      readdirSync("./commands/").forEach((dir, files) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")

        );

        const cmds = commands.map((command) => {

          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();
        let data1 = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "In progress." : cmds.join(", "),
        };

        categories.push(data);

      });

      let commandscount = "214";

      const embed = new MessageEmbed()
        .setTitle(`📬 Butuh bantuan? Ini semua perintah saya :\n Gunakan \`${prefix}help\` diikuti dengan nama perintah untuk mendapatkan lebih banyak informasi tambahan tentang suatu perintah. Contoh : \`${prefix}help ban\``)
        .addField(
          "**MODERATION**",
          "`anti-badwords` | `ban` | `clear` | `hide` | `kick` | `lock` | `maintainence` | `say` | `sendembed` | `serverlock` | `serverunlock` | `set-prefix` | `slowmode` | `stealemoji` | `unban` | `unhide` | `unlock` | `voicedeafen` | `voicekick` | `voicemove` | `voiceundeaf` | `voiceunmute` | `warn` | `warns`"
        )
        .addField(
          "**AUTO MODERATION**",
          "`anti-alt` | `antilink` | `autonick` | `auto-official-role` | `auto-official-role-disable` | `autorole` | `role-all`"
        )
        .addField(
          "**GIVEAWAY**",
          "`gcreate` | `gdelete` | `gedit` | `gend` | `glist` | `greroll` | `gstart`"
        )
        .addField(
          "**LEVELING**",
          "`rank`"
        )
        .addField(
          "**TICKET**",
          "`t-add` | `t-close` | `t-delete` | `t-new` | `t-open` | `t-remove` | `t-setup` | `logs-ticket` | `set-logs` | `remove-logs`"
        )
        .addField(
          "**REACTION ROLES**",
          "`reaction-role` | `reaction-role-remove`"
        )
        .addField(
          "**GAMES**",
          "`csgo ` | `poke` | `slots` | `tictactoe`"
        )
        .addField(
          "**IMAGE**",
          "`3000yr` | `approved` | `beautiful` | `brazzers` | `burn` | `cat` | `challenger` | `cuddle` | `dictator` | `distort` | `dog` | `duengon` | `facechange` | `fire` | `flatearth` | `gay` | `hug` | `kiss` | `love` | `magik` | `meme` | `qrcode` | `randomav` | `rip` | `scary` | `slap` |  `tickle` | `triggered` | `tweet` | `wanted`"
        )
        .addField(
          "**UTILITY**",
          "`avatar` | `covid` | `fake-message` | `members` | `reminder` | `roleid` | `roleinfo` | `servericon` | `serverinfo` | `time` | `userid` | `userinfo` | `weather` | `wiki`"
        )
        .addField(
          "**BIOGRAPHY**",
          "`bio-set` | `bio-check` | `bio-reset`"
        )
        .addField(
          "**BIRTHDAY**",
          "`birthday-set` | `birthday-check`"
        )
        .addField(
          "**CUSTOM AUTP REPPLY**",
          "`cc-create` | `cc-delete` | `cc-list`"
        )
        .addField(
          "**ECONOMY**",
          "`addmoney` | `balance` | `beg` | `bet` | `buy` | `daily` | `deposit` | `give` | `monthly` | `roulette` | `weekly` | `withdraw` | `work`"
        )
        .addField(
          "**FUN**",
          "`afk` | `animesearch` | `ascii` |  `baka` | `beep` | `calc` | `cattext` | `dice` | `dumb` | `eightball` | `flipcoin` | `fliptext` | `hack` | `iq` | `joke` | `kill` | `messages` | `nobar` | `poke` | `ratewaifu` | `rps` | `sneeze` | `waifu` | `youtube` | `zalgo`"
        )
        .addField(
          "**INFO**",
          "`dependencies` | `servers` | `stats` | `uptime` | `help` | `invite` | `ping` | `serverstats` | `profile`"
        )
        .addField(
          "**MUSIC**",
          "`24/7` | `bassboost` | `dc` | `join` | `lyrics` | `np` | `pause` | `play` | `queue` | `resume` | `shuffle` | `skip` | `stop` | `volume`"
        )
        .setFooter(
          `Requested by ${message.author.tag} | Total ${commandscount} Commands`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Perintah tidak valid! Pakai \`${prefix}help\` Untuk semua perintahku! (Beberapa Perintah akan ditampilkan pada bantuan Dan mereka bekerja hanya Command dinonaktifkan dalam perintah bantuan detaied)`)
          .setColor("FF0000")
          .setTimestamp()
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Detail Perintah:")
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "COMMAND:",
          command.name ? `\`${command.name}\`` : "Tidak ada nama untuk perintah ini."
        )
        .addField(
          "ALIASES:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Tidak ada alias untuk perintah ini."
        )
        .addField(
          "USAGE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.help.usage}}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "DESCRIPTION:",
          command.help.description
            ? command.help.description
            : "Tidak ada deskripsi untuk perintah ini."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};