import React from 'react'
import Login from './components/auth/Login'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
