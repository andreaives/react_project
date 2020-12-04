const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now }
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;

// so far we have the schema set up for journal entries, and we MIGHT have the context 
//set up for user login
// try putting a console log right were you pull out in info from the form
// 
// is the journal.js or the dream.js the file we are rendering
// should i start laying out the screen? ill keep my screen shared while i do the bootstrap stuff
// some thoughts while we wait
// we really only need to set user to state
// itll just bring all that user's records
// and we are rendering them right there

// so should we make some mock db entries, and then we can get the entries to render on the page.
// who is good at seeding dbs?
// we only really need like 5-6 entries maybe by two different user ids
