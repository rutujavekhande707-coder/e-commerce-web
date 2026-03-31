import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Products from './pages/Products'

import ProductsDetails from './pages/ProductsDetails'
import Login from './pages/Login'
import Contact from './pages/Contact'
import OrderDetails from './pages/OrderDetails'
import Payment from './pages/Payment'
import Comfom from './pages/Comfom'
import Cart from './pages/Cart'




function App() {
  const user = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    }, {
      path: "/products",
      element: <div>
        <Navbar />
        <Products />
      </div>
    },

    {
      path: "/products/:id",
      element: <div>
        <Navbar/>
        <ProductsDetails />
      </div>

    }, {
      path: "/order/:id",
      element:<div>
        <Navbar/>
         <OrderDetails />
      </div>
    },
    {
      path: "/payment/:id",
      element: <Payment />
    },
    {
      path: "/cart",
      element: <div>
        <Navbar />
        <Cart/>
      </div>


    },

    {
      path: "/contact",
      element: <div>
        <Navbar />
        <Contact />
      </div>
    },
    {
      path: "/login",
      element: <div>
        <Navbar />
        <Login />
      </div>
    }, {
      path: "/comform",
      element: <Comfom />
    }
  ])
  return (
    <div>
      <RouterProvider router={user} />
    </div>
  )
}

export default App
