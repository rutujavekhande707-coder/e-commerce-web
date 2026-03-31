import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Datas } from '../Data'
import { useCounter } from '../CounterContext'

function OrderDetails() {
    const { count } = useCounter()
    const navigate = useNavigate()
    const { id } = useParams()

    // ✅ First get product
    const product = Datas.find(item => item.id === Number(id))

    // ✅ Then calculate total price
    const totalPrice = product.price * count

    return (
        <div className="details-container">
            <h1 className='heading'>REVIEW YOUR ORDER</h1>

            <div className="details-card">
                <img src={product.thumbnail} alt={product.title} />

                <div className="details-info">
                    <h1>{product.title}</h1>
                    <p><b>Qty:</b> {count}</p>

                    <p className="price">₹{totalPrice}</p>

                    <button onClick={() => navigate(`/payment/${id}`)}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
