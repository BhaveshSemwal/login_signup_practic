const ensureAuthnticated = require("../Middlewares/auth");

const router = require("express").Router();

router.get("/",ensureAuthnticated, (req, res) => {
    console.log('logged in user details ----',req.user)
  res.status(200).json([
    {
      name: "mobile",
      price: 10000,
    },
    {
      name: "Tv",
      price: 20000,
    },
  ]);
});

module.exports = router;
