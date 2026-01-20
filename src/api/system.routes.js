const express = require("express");
const router = express.Router();
const system = require("../agent/system.js");

router.get("/version", async (req, res) => {
  const version = system.getAgentVersion();
  res.send({ version });
})

router.get("/disk", async (req, res) => {
  try {
    const diskSpace = await system.getDiskSpace();
    res.send(diskSpace);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/processes", async (req, res) => {
  try {
    const processes = await system.listProcesses();
    res.send(processes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/distro", async (req, res) => {
  try {
    const distroInfo = await system.getDistroInfo();
    res.send(distroInfo);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/envs", async (req, res) => {
  try {
    const envVars = await system.getEnvVariables();
    res.send(envVars);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;