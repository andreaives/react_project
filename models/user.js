const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { String, required: false },
  birthmonth: { type: string, required: false },
  birthday: { type: String, required: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;