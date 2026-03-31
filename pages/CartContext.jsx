import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartAllProduct, setCartAllProduct] = useState([])

  const addToCart = (product) => {
    setCartAllProduct(prev => {
      const exist = prev.find(item => item.id === product.id)
      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  // ✅ REMOVE ITEM
  const removeFromCart = (id) => {
    setCartAllProduct(prev =>
      prev.filter(item => item.id !== id)
    )
  }

  return (
    <CartContext.Provider value={{ cartAllProduct, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
