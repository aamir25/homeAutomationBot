const Telegram = require("telegram-node-bot");
const request = require('request');

class Light3Controller extends Telegram.TelegramBaseController {
	light3Handler($) {
		let state = $.message.text.split(" ").slice(1).join(" ");
		
		if (state.toLowerCase() === "on") {
			request("http://192.168.43.238/LED?value=1&pin=4", function (error, response, body) {
				if (error) {
					console.log(error);
					$.sendMessage("Something went wrong. Please try again later!");
					return;
				}
				$.sendMessage("Light3 is ON");
			});
		}

		if (state.toLowerCase() === "off") {
			request("http://192.168.43.238/LED?value=0&pin=4", function (error, response, body) {
				if (error) {
					console.log(error);
					$.sendMessage("Something went wrong. Please try again later!")
					return;
				}
				$.sendMessage("Light3 is OFF");
			});
		}		
	}

	get routes() {
		return {
			"light3Command": "light3Handler"
		};
	}
}

module.exports = Light3Controller;