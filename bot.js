const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    if(message.content.endsWith(' 2!'))
    {
        message.channel.send({files: ["https://i.imgur.com/5VLqjJx.gif"]});
    }
});

bot.on('message', function(message){
    if(message.toLowerCase.content.endsWith(' two!'))
    {
        message.channel.send({files: ["https://i.imgur.com/5VLqjJx.gif"]});
    }
});

bot.login(process.env.BOT_TOKEN);
