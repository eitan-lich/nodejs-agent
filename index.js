const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  const incomingHost = JSON.stringify(req.headers.host);
  console.log(`Got a request from ${incomingHost}`);
  res.status(514).send(`Sending back a response to ${incomingHost}`);
});


app.listen(process.env.AGENT_PORT || 8080, async () => {
  console.log(`Server listening at ${process.env.AGENT_PORT || 8080}`);
})
