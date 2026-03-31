// import React, { useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import "./Navbar.css"

// function Navbar() {
//     const [open, setOpen] = useState(false)
//     const navigate = useNavigate()
//     return (
//         <header>
//             <div>
//                  <h1 onClick={() => navigate("/")}>🛒 shopify</h1>

//             </div>
//             <nav className={`navbar ${open ? "open" : ""}`}>
//                 <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
//                 <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
//                 <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
//                 <button className="login-btn" onClick={() => navigate("/login")}>Login</button>

//             </nav>
//         </header>
//     )
// }

// export default Navbar




import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { useCart } from '../pages/CartContext'   // ✅ FIXED PATH

function Navbar() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    // ✅ get cart data from context
    const { cartAllProduct } = useCart()

    return (
        <header>
            <div>
                <h1 onClick={() => navigate("/")}>🛒 shopify</h1>
            </div>

            <nav className={`navbar ${open ? "open" : ""}`}>
                <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>

                <div className="dropdown">
                    <NavLink to="/products" onClick={() => setOpen(false)}>
                        Products
                    </NavLink>

                    <div className="dropdown-menu">
                        <NavLink to="/products?category=groceries" onClick={() => setOpen(false)}>Grocery</NavLink>
                        <NavLink to="/products?category=beauty" onClick={() => setOpen(false)}>Beauty</NavLink>
                        <NavLink to="/products?category=fragrances" onClick={() => setOpen(false)}>Fragrances</NavLink>
                        <NavLink to="/products?category=mobile-accessories" onClick={() => setOpen(false)}>Electronics</NavLink>
                        <NavLink to="/products?category=smartphones" onClick={() => setOpen(false)}>Smartphones</NavLink>
                        <NavLink to="/products?category=laptops" onClick={() => setOpen(false)}>Laptops</NavLink>
                        <NavLink to="/products?category=furniture" onClick={() => setOpen(false)}>Furniture</NavLink>
                    </div>
                </div>

                <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

                <NavLink to="/cart" onClick={() => setOpen(false)}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span> ({cartAllProduct.length})</span>
                </NavLink>

                <button className="login-btn" onClick={() => navigate("/login")}>
                    Login
                </button>
            </nav>
        </header>
    )
}

export default Navbar
