const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./Config/dbConnection");
const PORT = process.env.PORT || 5000;
const authRouter = require("./Routes/authRouter");
const productRouter = require("./Routes/productRouter");

connectDb();
app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
