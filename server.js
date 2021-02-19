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
  res.sendStatus(200);
});

app.listen(app.get("port"), function () {
  console.log("run at port", app.get("port"));
});
