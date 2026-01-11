const express = require("express");
const agentRoutes = require("./src/api/agentRoutes.js");
const { logApiCall, validateApiKey } = require("./src/api/middleware.js");
const { setApiKey } = require("./src/utils/authUtils.js");

setApiKey();

const app = express();

app.use(logApiCall);
app.use(validateApiKey)

app.use("/agentRoutes", agentRoutes);

app.get("/", async (req, res) => {
  const incomingHost = JSON.stringify(req.headers.host);
  res.status(514).send(`Sending back a response to ${incomingHost}`);
});


app.listen(process.env.AGENT_PORT || 8080, async () => {
  console.log(`Server listening at ${process.env.AGENT_PORT || 8080}`);
})
