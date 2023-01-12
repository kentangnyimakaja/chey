const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const Discord = require("discord.js");

module.exports = {
  name: "calc",
  aliases: ["calculate"],
  execute: async(client, message, args, data, db) => {

       if(message.guild === null)return;


    if(args.length < 1) {
	    return message.channel.send({embed: {
            color: 16734039,
            description: "Anda harus memberikan persamaan untuk diselesaikan pada kalkulator! (Misal 9 + 10)"
        }}) 
    }
			
    const question = args.join(' ');

    let answer;
    if(question.indexOf('9 + 10') > -1) {
        answer = '21 (🤣 XD, mwhehehe)';
    } else {
        try {
            answer = math.eval(question);
        } catch (err) {
          message.channel.send({embed: {
                color: 16734039,
                description: "Persamaan matematika tidak valid: " + `${err}`
            }});
          return;
        }
    }

  const calc = new Discord.MessageEmbed()
              .setTitle("Calculator")
              .setColor(`RANDOM`)
              .addField("Pertanyaan : ", `${question}`)
              .addField("Jawaban : ", `${answer}`)
              .setTimestamp()
              .setFooter(`Requested by ${message.author.tag}`)
          message.channel.send(calc);
}
}
module.exports.help = {
    name: "calc",
    description: "Calculator",
    usage: "calc <task>",
    type: "Fun" 
}