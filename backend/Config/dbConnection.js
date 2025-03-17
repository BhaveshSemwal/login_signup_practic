const mongoose = require("mongoose");

const connectDb = async () => {
  const connect = await mongoose.connect(process.env.CONNECTION_STRING);
  console.log(
    "Database Connected to: ",
    connect.connection.host,
    connect.connection.name
  );
};

module.exports = connectDb;
