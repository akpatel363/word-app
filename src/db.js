const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

//Connecting to the database.
mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDB.");
  })
  .catch((err) => {
    console.log("Error Connecting to database -> " + err.message);
  });
