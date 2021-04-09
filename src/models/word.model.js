const mongoose = require("mongoose");

//Mongoose Schema for a word.
const schema = mongoose.Schema(
  {
    word: String,
    results: [
      {
        category: String,
        entries: [
          {
            origin: [],
            senses: [
              {
                definitions: [],
                examples: [{ text: String }],
                subsenses: [{ definitions: [], examples: [{ text: String }] }],
              },
            ],
          },
        ],
      },
    ],
  },
  { timestamps: true } //Timestamps to sort the data.
);

//Creating a mongoose model.
const Word = mongoose.model("Word", schema);

//Exporting the mongoose model.
module.exports = Word;
