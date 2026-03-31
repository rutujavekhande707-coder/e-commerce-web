import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Datas } from '../Data'
import "./ProductsDetails.css"
import { useCounter } from '../CounterContext'
import { useCart } from './CartContext'

function ProductsDetails() {
  const { addToCart } = useCart()
  const { count, increment,decrement } = useCounter(1)
  const navigate = useNavigate()
  const { id } = useParams()

  const product = Datas.find(item => item.id === Number(id))
  const totalPrice = product.price * count

  const handleAddToCart = () => {
    addToCart(product, count)
    alert("Product added to cart ✅")
  }

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={product.thumbnail} alt={product.title} />

        <div className="details-info">
          <h1>{product.title}</h1>
          <p><b>Category:</b> {product.category}</p>

          <p className="qty-btn">
             <button onClick={increment}>+</button>
            <b>Qty: {count}</b>
             <button onClick={decrement}>-</button>
           
          </p>

          <p className="price">₹{totalPrice}</p>
          <p>{product.description}</p>

          <div className="btn">
            <button onClick={handleAddToCart}>Add To Cart</button>
            <button onClick={() => navigate(`/order/${id}`)}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetails
