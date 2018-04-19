const Telegram = require("telegram-node-bot");

class StartController extends Telegram.TelegramBaseController {
	startHandler($) {
		$.sendMessage("Hi!\nI am wiki, your home bot.\nHow can I help you?");
		// $.sendMessage("I am wiki, your home bot.");
		// $.sendMessage("How can I help you?");
	}

	get routes() {
		return {
			"startCommand": "startHandler"
		};
	}
}

module.exports = StartController;