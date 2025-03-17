const jwt = require("jsonwebtoken");
const ensureAuthnticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({
      message: "unauthorized,jwt required",
    });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({
      message: "unauthorized,jwt token wrong or expired",
    });
  }
};

module.exports = ensureAuthnticated;
