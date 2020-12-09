import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  onSubmit: function(entrydata) {
    return axios.post("/api/entry" + entrydata);
  },
  // Saves a book to the database
  saveEntry: function() {
    return axios.post("/api/entry");
  },

  getUser: function(email) {
    return axios.get("/api/user/" + email)
  }
};
