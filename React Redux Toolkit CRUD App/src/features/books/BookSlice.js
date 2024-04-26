import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"


const initialBooks = {
  books: [
    { id: uuidv4(), title: "PHP", author: "Mostafizur Rahman" },
    { id: uuidv4(), title: "Java", author: "Mostafizur Rahman" }
  ]
}

const booksSlice = createSlice({

  name: "books",
  initialState: initialBooks,
  reducers: {

    showBooks: (state) => state,

    addBooks: (state, action) => {
      state.books.push(action.payload)
    },

    deleteBooks: (state, action) => {
      const id = action.payload

      state.books = state.books.filter((book) => book.id !== id)
    },

    updateBook: (state, action) => {

      const { id, title, author } = action.payload

      const isMatchBook = state.books.filter((book) => book.id === id)

      if (isMatchBook) {
        isMatchBook[0].title = title;
        isMatchBook[0].author = author;
      }

    }

  }

})

export const { showbooks, addBooks, deleteBooks, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
