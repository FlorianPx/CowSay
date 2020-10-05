const myInformation = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
	text : `${myInformation()}`,
	e : "oO",
	T : "U "
}));