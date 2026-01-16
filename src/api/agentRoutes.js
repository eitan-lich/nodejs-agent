const express = require("express");
const router = express.Router();
const pkg = require("../../package.json");
const { executeCommand } = require("../utils/terminalUtils");
const { LINUX_COMMANDS } = require("../constants/linuxCommands");

router.get("/version", async (req, res) => {
  res.send(pkg.version);
})

router.get("/health", async (req, res) => {
  res.send({ status: "ok" });
});

router.get("/getDiskSpace", async (req, res) => {
  try {
    const { stdout } = await executeCommand(LINUX_COMMANDS.GET_DISK_SPACE);
    res.send(stdout);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/listProcesses", async (req, res) => {
  try {
    const { stdout } = await executeCommand(LINUX_COMMANDS.LIST_PROCESSES);
    res.send(stdout);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/distroInfo", async (req, res) => {
  try {
    const { stdout } = await executeCommand(LINUX_COMMANDS.GET_DISTRO_INFO);
    res.send(stdout);
  } catch (error) {

    res.status(500).send({ error: error.message });
  }
});

router.get("/environmentVariables", async (req, res) => {
  try {
    const envVars = process.env;
    res.send(envVars);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;