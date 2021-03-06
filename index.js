const HypixelAPI = require('hypixel-api');
const Discord = require('discord.js');
const client = new Discord.Client();
const key = process.env.key;
const clientHyp = new HypixelAPI(key);
const discordReciepient = "289120054174416897"

var alreadySent = false;


client.on("ready",()=>{
    console.log("ready");
});



setInterval(function(){
    clientHyp.getStatus("uuid", "d47ad269-4182-40fd-8486-cae7479b0c6e").then((sess)=>{
        var online = sess.session.online
        if(online){
            if(!alreadySent){
                const user = client.users.cache.get(discordReciepient);
                user.send(user.toString() + "David is online!");
                alreadySent= true
            }

        }else{
            if(alreadySent){
                const user = client.users.cache.get(discordReciepient);
                user.send(user.toString() + "David is offline!");
                alreadySent= false
            }
        }

    }).catch((err) =>{
        console.log(err);
    });
}, 2000);


client.login(process.env.token);
    

