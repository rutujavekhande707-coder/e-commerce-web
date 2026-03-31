import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterProvider } from './CounterContext.jsx'
import { CartProvider } from './pages/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </CounterProvider>

  </StrictMode>,
)
