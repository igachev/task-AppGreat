import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import AllPhotos from './components/AllPhotos/AllPhotos'

function App() {

  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<AllPhotos />} />
    </Routes>
    </>
  )
}

export default App
