
const express = require("express");
const router = express.Router();
const pkg = require("../../package.json");

router.post("/version", async (req, res) => {
  res.send(pkg.version);
})

module.exports = router;
