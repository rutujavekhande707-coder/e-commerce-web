import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return (
        <section >
            <div className='main'>
                <div className='div-1'>
                    <h1>Modern E-Commerce<br /> Experience</h1>
                    <p>Designed to make online shopping simple, fast, and secure.</p>
                    <button onClick={() => navigate("/login")}>Get Stated</button>
                </div>
                <div className='div-2'>
                    <img src="https://png.pngtree.com/png-vector/20210905/ourmid/pngtree-new-product-poster-png-image_3889773.jpg" alt="" />

                </div>
            </div>
        </section>
    )
}

export default Home
