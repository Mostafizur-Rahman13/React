import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addBooks } from '../features/books/BookSlice'
import { useNavigate } from "react-router-dom"

const AddBook = () => {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddBook = (e) => {
    e.preventDefault()

    const newBook = { id: uuidv4(), title: title, author: author }

    dispatch(addBooks(newBook))
    navigate("/show-book", { replace: true })
  }



  return (

    <div>
      <h2>Add Book</h2>

      <form onSubmit={handleAddBook}>

        <div className='form-field'>

          <label htmlFor="title">Title;
          </label>

          <input type="text"
            id='title' name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

        </div>

        <div className='form-field'>

          <label htmlFor="author"  >Title ;
          </label>

          <input type="text"
            id='author' name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />

        </div>

        <button type='submit'>Add Book</button>

      </form>
    </div>
  )
}

export default AddBook;