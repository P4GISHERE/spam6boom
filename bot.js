const Discord = require('discord.js');
const client = new Discord.Client();
console.log("P4G the best");
var prefix = "4";

client.on("ready", () => {
let channel =     client.channels.get("515480735294160908")
setInterval(function() {
channel.send(`**Road To 100k Credit**`);
}, 100)
})





client.on('message', message => {
    if(message.content === 'check'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'check'){
        message.channel.send('#credit')
    }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });


client.login(process.env.BOT_TOKEN);
