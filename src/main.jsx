import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css"
import App from './App.jsx'
import Header from './Header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Header />
    <App />
    
    
  </StrictMode>,
)
