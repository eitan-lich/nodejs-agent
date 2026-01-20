const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (process.env.DISABLE_API_AUTH !== "true" && apiKey !== process.env.API_KEY) {
    return res.status(403).send({ error: 'Forbidden: Invalid or missing API Key' });
  }
  next();
}

module.exports = { validateApiKey }