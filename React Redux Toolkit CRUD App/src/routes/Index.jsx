import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AddBook from '../pages/AddBook'
import ViewBook from '../pages/ViewBook'
import EditBook from '../pages/EditBook'
import Error from '../pages/Error'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

const Index = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path='/add-book' element={<AddBook />} />

        <Route path='/show-book' element={<ViewBook />} />

        <Route path='/edit-book' element={<EditBook />} />

        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default Index