const Telegram = require("telegram-node-bot");

class OtherwiseController extends Telegram.TelegramBaseController {
	handle($) {
		$.sendMessage("Please use a valid command!");
	}
}

module.exports = OtherwiseController;