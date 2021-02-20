const line = require("@line/bot-sdk");

exports.lineMiddleware = (req, res, next) => {
  try {
    const config = {
      channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
      channelSecret: process.env.CHANNEL_SECRET,
    };
    const client = new line.Client(config);
    line.middleware(config);

    next();
  } catch (error) {
    console.log("sad");
  }
};
