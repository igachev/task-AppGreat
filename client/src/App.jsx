import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import AllPhotos from './components/AllPhotos/AllPhotos'
import PhotoDetails from './components/PhotoDetails/PhotoDetails'

function App() {

  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<AllPhotos />} />
      <Route path='/photos/:id/details' element={<PhotoDetails />} />
    </Routes>
    </>
  )
}

export default App
