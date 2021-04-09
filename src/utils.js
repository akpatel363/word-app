//Parsing the incoming data to save Lexical Entries, SubEntries, Origin, Senses, Sub Senses and Examples.
const parse = (r) => {
  return r.results?.[0].lexicalEntries?.map((e) => ({
    category: e.lexicalCategory?.text,
    entries: e.entries.map((i) => ({
      origin: i?.etymologies,
      senses: i?.senses?.map((i1) => ({
        definitions: i1.definitions,
        examples: i1.examples,
        subsenses: i1.subsenses?.map((i2) => ({
          definitions: i2.definitions,
          examples: i2.examples,
        })),
      })),
    })),
  }));
};

//Exporting the function.
module.exports = { parse };
