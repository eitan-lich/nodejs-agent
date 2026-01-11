const logApiCall = (req, res, next) => {
  console.log(`Got a ${req.method} request from ${req.headers.host} to route: ${JSON.stringify(req.url)}`);
  next();
}

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  console.log(apiKey)
  if (apiKey !== process.env.API_KEY || process.env.API_KEY === undefined) {
    return res.status(403).send({ error: 'Forbidden: Invalid or missing API Key' });
  }
  next();
}

module.exports = { logApiCall, validateApiKey }