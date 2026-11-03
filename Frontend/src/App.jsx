import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBooks from './pages/deleteBooks'
import CreateBooks from './pages/createBooks'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
      <Route path="/books/create" element={<CreateBooks />} />
    </Routes>
  )
}

export default App
