const crypto = require("crypto");
const { executeCommand } = require("./terminalUtils.js");

async function setApiKey() {
    const apiKey = generateApiKey();
    process.env.API_KEY = apiKey;
    await executeCommand(`echo ${apiKey} > "/tmp/.secret_api_key"`);
    console.log(`Successfully generated an API Key. Read it's value from the generated .secret_api_key file in the /tmp directory :)`);
};

function generateApiKey() {
    return crypto.randomBytes(16).toString("hex");
}

module.exports = {
    setApiKey
};