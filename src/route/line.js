const express = require("express");
const { linebot } = require("../controller/line");
const { lineMiddleware } = require("../middleware");
const router = express.Router();
const line = require("@line/bot-sdk");
const env = require("dotenv");
env.config();

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

router.post("/callback", line.middleware(config), linebot);

module.exports = router;
