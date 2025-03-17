import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Browser } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <Browser>
  <AppContextProvider>
    <App />
  </AppContextProvider>
  </Browser>,
)
