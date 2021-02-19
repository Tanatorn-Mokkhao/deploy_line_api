const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.set("port", process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello");
});

app.post("/webhook", (req, res) => {
  //   let reply_token = req.body.events[0].replyToken;
  //   reply(reply_token);
  res.sendStatus(200);
});

app.listen(app.get("port"), function () {
  console.log("run at port", app.get("port"));
});
function reply(reply_token) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer {xxxxxxx}",
  };
  let body = JSON.stringify({
    replyToken: reply_token,
    messages: [
      {
        type: "text",
        text: "Hello",
      },
      {
        type: "text",
        text: "How are you?",
      },
    ],
  });
  request.post(
    {
      url: "https://api.line.me/v2/bot/message/reply",
      headers: headers,
      body: body,
    },
    (err, res, body) => {
      console.log("status = " + res.statusCode);
    }
  );
}
