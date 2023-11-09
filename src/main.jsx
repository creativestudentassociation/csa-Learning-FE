import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/css/App.css'
import '../src/css/home.css'
import '../src/css/materiList.css'
import '../src/css/Course.css'
import '../src/css/ChoiseDivision.css'
import '../src/css/vidioCourse.css'
import '../src/css/chatAI.css'
import '../src/css/challengeAdmin.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
