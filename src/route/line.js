const express = require("express");
const { line } = require("../controller/line");
const { lineMiddleware } = require("../middleware");
const router = express.Router();

router.get("/callback", lineMiddleware, line);

module.exports = router;
