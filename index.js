//TOKENHERE -  Insert Token
const Discord = require("discord.js");

const TOKEN = "TOKENHERE";
const PREFIX = "!"

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Bot Online!")
    });

bot.on("message", function(message)  {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "ping":
        message.channel.send("Pong")
        break;
}

});
bot.login(TOKEN);
