const crypto = require("crypto");

async function setApiKey() {
    const apiKey = generateApiKey();
    process.env.API_KEY = apiKey;
    console.log(`Successfully generated an API Key: ${apiKey}`);
};

function generateApiKey() {
    return crypto.randomBytes(16).toString("hex");
}

module.exports = {
    setApiKey
};