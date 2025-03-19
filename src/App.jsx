import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

import TitlePage from "./TitlePage.jsx"
import LoginPage from "./LoginPage.jsx"
import HomePage from "./HomePage.jsx"

function App() {

  return (
    <>
    <BrowserRouter basename='CP_Dash_NITC'>
    <CookiesProvider>
      <Routes>
        <Route path="/" element={<TitlePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/*" element={<h1>404 Not found</h1>}/>
      </Routes>
      </CookiesProvider>
    </BrowserRouter>
    </>
  )
}

export default App
