const logApiCall = (req, res, next) => {
    console.log(`Got a ${req.method} request from ${req.headers.host} to route: ${JSON.stringify(req.url)}`);
    next();
}

module.exports = { logApiCall }