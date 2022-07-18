import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import First from './pages/first'
import Second from './pages/second'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="first" element={<First />} />
      <Route path="second/:company" element={<Second />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
