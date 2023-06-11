const jwt = require("jsonwebtoken");

function verfiyAuth(req, res, next) {
  const xAuthToken = req.header("x-auth-token");

  if (!xAuthToken) {
    return res.status(401).json({
      error: "Access denied",
      message: "Token not found",
    })
  }

  try {
    const user = jwt.verify(xAuthToken, process.env.SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({
      error: "Invalid token",
      message: "Token verification failed"
    })
  }
}

module.exports = verfiyAuth;