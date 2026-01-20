const express = require("express");
const systemRoutes = require("./src/api/system.routes.js");
const { validateApiKey } = require("./src/middleware/auth.middleware.js");
const { logApiCall } = require("./src/middleware/logging.middleware.js");
const { setApiKey } = require("./src/utils/authUtils.js");

setApiKey();

const app = express();

app.use(logApiCall);
app.use(validateApiKey)

app.use("/system", systemRoutes);

app.get("/", async (req, res) => {
  const incomingHost = JSON.stringify(req.headers.host);
  res.status(514).send(`Sending back a response to ${incomingHost}`);
});


const server = app.listen(process.env.AGENT_PORT || 8080, async (error, result) => {
  console.log(`Server listening at ${process.env.AGENT_PORT || 8080}`);
})

server.on("error", (error) => {
  console.error("Server error:", error);
});


process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});