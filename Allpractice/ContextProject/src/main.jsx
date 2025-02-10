// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Logcontext from './Logcontext.jsx'

createRoot(document.getElementById('root')).render(
  <Logcontext>
        <App />
  </Logcontext>

  
)
