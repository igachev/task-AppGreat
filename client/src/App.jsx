import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import AllPhotos from './components/AllPhotos/AllPhotos'
import PhotoDetails from './components/PhotoDetails/PhotoDetails'
import CreatePhoto from './components/CreatePhoto/CreatePhoto'
import EditPhoto from './components/EditPhoto/EditPhoto'

function App() {

  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<AllPhotos />} />
      <Route path='/photos/:id/details' element={<PhotoDetails />} />
      <Route path='/photos/:id/edit' element={<EditPhoto />} />
      <Route path='/photos/create' element={<CreatePhoto />} />
    </Routes>
    </>
  )
}

export default App
