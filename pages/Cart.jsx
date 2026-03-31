import React from 'react'
import { useCart } from './CartContext'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cartAllProduct, removeFromCart } = useCart()
  const navigate = useNavigate()

  if (cartAllProduct.length === 0) {
    return (
      <div className="cart-wrapper">
        <h2 className="empty-cart">Your cart is empty 🛒</h2>
      </div>
    )
  }

  const total = cartAllProduct.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  )

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <h1>My Cart</h1>

        {cartAllProduct.map((item) => (
          <div className="cart-detail" key={item.id}>
            <div className="cart-item">
              <h3>{item.title}</h3>
              <p>Qty: {item.qty}</p>
              <p>Price: ₹{item.price}</p>
            </div>

            {/* ✅ REMOVE ICON */}
            <div className="remove-item">
              <i
                className="fa-solid fa-trash"
                onClick={() => removeFromCart(item.id)}
              ></i>
            </div>
          </div>
        ))}

        <div className="cart-total">
          <h2>Total: ₹{total}</h2>
          <button
            className="checkout-btn"
            onClick={() => navigate(`/order/${cartAllProduct[0].id}`)}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
