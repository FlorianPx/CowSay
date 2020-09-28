const myInformation = require('./information.js');
myInformation();

let cowsay = require("cowsay");

console.log(cowsay.say({
	text : `${myInformation()}`,
	e : "oO",
	T : "U "
}));