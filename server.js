// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const cors = require("cors");

// app.use(cors());
// app.use(bodyParser.json());

// app.set("port", process.env.PORT || 4000);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get("/", function (req, res) {
//   res.send("Hellotest");
// });

// app.post("/webhook", (req, res) => {
//   let reply_token = req.body.events[0].replyToken;
//   reply(reply_token);
//   res.sendStatus(200);
// });

// app.listen(app.get("port"), function (reply_token) {
//   let headers = {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer KsRSJLF2R0brBcCV5PjI89WfNkSVfz85wjNvDk1F9+yKWa0BQi4zJI/PivV26z7J1bONqEzlNDuuvyhMnA2kmOBwB0pDKaHTEt0iIlnn5Icj5QF8tyzamuhgYQqK/ZPjOmbQCm5pORzKoYjK6mq2/QdB04t89/1O/w1cDnyilFU=",
//   };
//   let body = JSON.stringify({
//     replyToken: reply_token,
//     messages: [
//       {
//         type: "text",
//         text: "Hello",
//       },
//       {
//         type: "text",
//         text: "How are you?",
//       },
//     ],
//   });
//   request.post(
//     {
//       url: "https://api.line.me/v2/bot/message/reply",
//       headers: headers,
//       body: body,
//     },
//     (err, res, body) => {
//       console.log("status = " + res.statusCode);
//     }
//   );
// });
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();

app.use(bodyParser.json());

app.set("port", process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  var text = req.body.events[0].message.text;
  var sender = req.body.events[0].source.userId;
  var replyToken = req.body.events[0].replyToken;
  console.log(text, sender, replyToken);
  console.log(typeof sender, typeof text);
  // console.log(req.body.events[0])
  if (text === "สวัสดี" || text === "Hello" || text === "hello") {
    sendText(sender, text);
  }
  res.sendStatus(200);
});

function sendText(sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: "text",
        text: "สวัสดีค่ะ เราเป็นผู้ช่วยปรึกษาด้านความรัก สำหรับหมามิ้น 💞",
      },
    ],
  };
  request(
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer KsRSJLF2R0brBcCV5PjI89WfNkSVfz85wjNvDk1F9+yKWa0BQi4zJI/PivV26z7J1bONqEzlNDuuvyhMnA2kmOBwB0pDKaHTEt0iIlnn5Icj5QF8tyzamuhgYQqK/ZPjOmbQCm5pORzKoYjK6mq2/QdB04t89/1O/w1cDnyilFU=",
      },
      url: "https://api.line.me/v2/bot/message/push",
      method: "POST",
      body: data,
      json: true,
    },
    function (err, res, body) {
      if (err) console.log("error");
      if (res) console.log("success");
      if (body) console.log(body);
    }
  );
}

app.listen(app.get("port"), function () {
  console.log("run at port", app.get("port"));
});
