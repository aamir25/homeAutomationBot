const Telegram = require("telegram-node-bot");

const StartController = require("./controllers/start.js")
const Light1Controller = require("./controllers/light1.js")
const Light2Controller = require("./controllers/light2.js")
const Light3Controller = require("./controllers/light3.js")
const Light4Controller = require("./controllers/light4.js")
const PingController = require("./controllers/ping.js")
const OtherwiseController = require("./controllers/otherwise.js")

const tg = new Telegram.Telegram("554154116:AAG-ylDIeFI9IRGiia2HNVFVyxSkRIAHn6g", {
	workers: 1
});

tg.router
.when(new Telegram.TextCommand("/start", "startCommand"), new StartController())
.when(new Telegram.TextCommand("/light1", "light1Command"), new Light1Controller())
.when(new Telegram.TextCommand("/light2", "light2Command"), new Light2Controller())
.when(new Telegram.TextCommand("/light3", "light3Command"), new Light3Controller())
.when(new Telegram.TextCommand("/light4", "light4Command"), new Light4Controller())
.when(new Telegram.TextCommand("/ping", "pingCommand"), new PingController())
.otherwise(new OtherwiseController());