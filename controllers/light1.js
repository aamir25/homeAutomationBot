const Telegram = require("telegram-node-bot");
const request = require('request');

class Light1Controller extends Telegram.TelegramBaseController {
	light1Handler($) {
		let state = $.message.text.split(" ").slice(1).join(" ");
		
		if (state.toLowerCase() === "on") {
			request("http://192.168.43.238/LED?value=1&pin=2", function (error, response, body) {
				if (error) {
					console.log(error);
					$.sendMessage("Something went wrong. Please try again later!");
					return;
				}
				$.sendMessage("Light1 is ON");
			});
		}

		if (state.toLowerCase() === "off") {
			request("http://192.168.43.238/LED?value=0&pin=2", function (error, response, body) {
				if (error) {
					console.log(error);
					$.sendMessage("Something went wrong. Please try again later!")
					return;
				}
				$.sendMessage("Light1 is OFF");
			});
		}		
	}

	get routes() {
		return {
			"light1Command": "light1Handler"
		};
	}
}

module.exports = Light1Controller;