const crypto = require("crypto");

async function setApiKey() {
    const apiKey = generateApiKey();
    process.env.API_KEY = apiKey;
    console.log(`Successfully generated an API Key: ${apiKey}`);
    console.log(`Env variable API_KEY set: ${process.env.API_KEY}`);
    console.log(`All env variables: ${JSON.stringify(process.env)}`);
};

function generateApiKey() {
    return crypto.randomBytes(16).toString("hex");
}

module.exports = {
    setApiKey
};
