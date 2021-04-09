const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors");
const { parse } = require("./src/utils");
const Word = require("./src/models/word.model");
require("./src/db");

const app = express();

//Getting variable for the environment.
const PORT = process.env.PORT;
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

const staticRoot = path.join(__dirname, "client", "build");

//applying middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(staticRoot));

app
  .route("/api/words")
  .get(async (req, res, next) => {
    try {
      //Fetching all words from the database.
      const words = await Word.find().sort("-createdAt");
      return res.json(words);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  })
  .post(async (req, res, next) => {
    try {
      const { word } = req.body;
      //Fetching the new word from the Oxford API.
      const data = (
        await axios.get(
          `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}`,
          {
            headers: {
              app_id: APP_ID,
              app_key: APP_KEY,
            },
          }
        )
      ).data;
      //Creating a new word in mongoDB.
      const createdWord = await Word.create({
        word: data.id,
        //parsing the incoming data to store relevant information.
        results: parse(data),
      });
      return res.json(createdWord);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

app.get("/*", (req, res) => {
  res.redirect("/index.html");
});
app.listen(PORT, () => console.log(`Server Up and Running on ${PORT}`));
