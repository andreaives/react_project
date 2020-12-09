const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/celestial-navigator',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

const entrySchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  message: { String },
  date: { type: Date, default: Date.now }
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
