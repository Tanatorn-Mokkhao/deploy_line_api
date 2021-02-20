const express = require("express");
const { linebot } = require("../controller/line");
const { lineMiddleware } = require("../middleware");
const router = express.Router();
const line = require("@line/bot-sdk");
const env = require("dotenv");
env.config();

// const config = {
//   channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
//   channelSecret: process.env.CHANNEL_SECRET,
// };

// const client = new line.Client(config);

// router.post("/callback", line.middleware(config), linebot);

// const config = {
//   channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
//   channelSecret: process.env.CHANNEL_SECRET,
// };

// // create LINE SDK client
// const client = new line.Client(config);

// // create Express app
// // about Express itself: https://expressjs.com/
// const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
router.post("/callback", lineMiddleware, (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: "text", text: event.message.text };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

module.exports = router;
