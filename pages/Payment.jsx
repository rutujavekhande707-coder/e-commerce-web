import React from 'react';
import "./Payment.css"
import { useNavigate, useParams } from 'react-router-dom';
import { Datas } from '../Data';
import { useCounter } from '../CounterContext';
function Payment() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { count } = useCounter()
    const product = Datas.find(item => item.id === Number(id))
    const totalPrice = product.price * count
    return (
        <div className="payment-container">
            <h1 className="heading">PAYMENT METHOD</h1>

            <div className="payment-card">
                <h2>Select Payment Method</h2>

                <div className="radio-btn">
                    <label className="payment-option">
                        <input type="radio" name="payment" />
                        <span>₹ Cash on Delivery</span>
                    </label>

                    <label className="payment-option">
                        <input type="radio" name="payment" />
                        <span>₹ Pay Online</span>
                    </label>
                    <div className='span'>
                        <span>
                            <p>₹ {totalPrice}</p>
                            <h2>VIEW PRICE DETAILS</h2>
                        </span>
                        <span>
                            <button onClick={() => navigate("/Comform")}>Place order</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
