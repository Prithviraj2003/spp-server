const mongoose = require("mongoose");

// const connectionString = process.env.MONGO_URL;
const connectionString = "mongodb://localhost:27017/mydatabase";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
