const Discord = require("discord.js");
const client = new Discord.Client();
// this is basic logging into  discord's api after installing discord js with npm
client.on("ready", () => {
  console.log("I am ready!");
});
//client is basically the discord client so your bot! it'll be able t o what ever you code it to do!
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
// prefix for what message needs to use
const prefix = "^";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
// simple command line copy format to add more commands recommend using a command array using var msg = message.content.tolowercase
// tolowercase/touppercase allows no need for case senstive commands
// using variables to split up commands will help making commands easier.
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "doodoo")) {
    message.channel.send("huh");
  }
  if (message.content.startsWith(prefix + "weather")) {
  // simple weather command requires you to do npm install weather-js
	  const weather = require('weather-js')
	  var args= message.content.split (" ")
 weather.find({search: args.join(" "), degreeType:'F'}, function(err, result) {
	  if (err) message.channel.send(err);
	  
	  if(result.length === 0) {
		  message.channel.send('**Please Enter Real Location.**')
		  return;
	  }
	  
	  var current = result[0].current;
	  var location = result[0].location;
	  
	  const embed = new Discord.RichEmbed()
		.setDescription(`**${current.skytext}**`)
		.setAuthor(`Weather for ${current.observationpoint}`)
		.setThumbnail(current.imageUrl)
		.setColor(0x00AE86) // change this if i need abetter hex colorDepth
		.addField('Timezone',`UTC${location.timezone}`, true)
		.addField('Degree type',location.degreetype, true)
		.addField('Temperature',`${current.temperature} Degrees`, true)
		.addField('Feels Like',`${current.feelslike} Degrees`, true)
		.addField('Winds',current.winddisplay,true)
		.addField('Humidity', `${current.humidity}%`, true)
		message.channel.send({embed});
		});
  }
	// THIS IS A RANDOM IMAGE COMMAND It'll find the folder with the directory of what ever /randomimages is
	// number is how many images you want stored
	// MAKE SURE YOU HAVE ALL THE IMAGE FILES THE SAM FILE type or your bot will be confused!.
 if (message.content.startsWith(prefix + "randomimage")) {
	  number = 20;
	  imagenumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
	  message.channel.send ( {files: ["./randomimages/" + imagenumber + ".png"]})
  }
 })
 }
  }) 
  // the syntax's up top are errors but dont worry it'll be easy t o fix.
  // this is a simple message responder it'll only respond to the word so make sure you add contains or includes or make a message array

client.on("message", (message) => {
	if (message.content === "dumb") {
		message.channel.send("STOP YOU ARE BULLYING https://cdn.discordapp.com/attachments/352417856081887233/500044303595470858/noot.gif");
	}
});

// replace token with what ever your discord tokenis.
client.login("TOKEN");
