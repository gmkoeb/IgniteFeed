import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import AuthProvider from './context/authentication.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
