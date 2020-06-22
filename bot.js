const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = ('.');

bot.on('ready', () =>{
    console.log('[tutorial] ready.');
})

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(' ');

    if(args[0] == "roll") {
        if(args.length > 1){
            rollNum = Math.ceil(Math.random() * args[1]);
            if (isNaN(rollNum)) {
                message.channel.send("please use an integer.");
            } else{
                message.channel.send('You rolled a ' + args[1] + " sided die and got " + rollNum + '.');
                console.log(rollNum)
            }
        } else {
            message.channel.send('use .roll (sides) to roll a die.');
        }
    }

})

client.login(process.env.BOT_TOKEN);//BOT_TOKEN
