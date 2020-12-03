const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
