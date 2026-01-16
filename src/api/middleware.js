const logApiCall = (req, res, next) => {
  console.log(`Got a ${req.method} request from ${req.headers.host} to route: ${JSON.stringify(req.url)}`);
  next();
}

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (process.env.DISABLE_API_AUTH !== "true" && apiKey !== process.env.API_KEY) {
    return res.status(403).send({ error: 'Forbidden: Invalid or missing API Key' });
  }
  next();
}

module.exports = { logApiCall, validateApiKey }