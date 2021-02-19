const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require("cors");

const app = express();
app.use(cors());
app.set("port", process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  //   let reply_token = req.body.events[0].replyToken;
  //   reply(reply_token);
  res.sendStatus(200);
});
app.listen(app.get("port"), function () {
  console.log("run at port", app.get("port"));
});
// function reply(reply_token) {
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
// }
