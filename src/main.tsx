import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalProvider } from './context/globalContext'
import { GlobalStyle } from './styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
    <GlobalStyle/>
    <App />
    </GlobalProvider>
  </React.StrictMode>,
)
