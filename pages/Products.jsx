



// import React from 'react'
// import { Link, useSearchParams } from 'react-router-dom'
// import { Datas } from '../Data'
// import "./Products.css"

// function Products() {
//     const [searchParams] = useSearchParams()
//     const category = searchParams.get("category")

//     const filteredProducts = category
//         ? Datas.filter(item => item.category === category)
//         : Datas

//     return (
//         <section>
//             <div className="prod-detail">
//                 <h1 className="page-title">
//                     {category ? category.toUpperCase() : "PRODUCTS"}
//                 </h1>

//                 <div className="product-grid">
//                     {filteredProducts.length > 0 ? (
//                         filteredProducts.map(product => (
//                             <div className="product-card" key={product.id}>
//                                 <img
//                                     src={product.thumbnail}
//                                     alt={product.title}
//                                 />
//                                 <h3>{product.title}</h3>
//                                 <p className="price">₹{product.price}</p>
//                                 <Link to={`/products/${product.id}`}>
//                                     More Info
//                                 </Link>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No products found 😕</p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Products




// import React, { useState } from 'react'
// import { Link, useSearchParams } from 'react-router-dom'
// import { Datas } from '../Data'
// import "./Products.css"

// function Products() {
//     const [searchParams] = useSearchParams()
//     const category = searchParams.get("category")

//     const [searchQuery, setSearchQuery] = useState("")

//     // 1️⃣ Category filter
//     const categoryFiltered = category
//         ? Datas.filter(item => item.category === category)
//         : Datas

//     // 2️⃣ Search filter
//     const filteredProducts = categoryFiltered.filter(item =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     )

//     return (
//         <section>
//             <div className="prod-detail">

//                 <h1 className="page-title">
//                     {category ? category.toUpperCase() : "PRODUCTS"}
//                 </h1>

//                 {/* 🔍 SEARCH INPUT */}
//                 <input
//                     type="text"
//                     placeholder="Search products..."
//                     className="search-input"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />

//                 <div className="product-grid">
//                     {filteredProducts.length > 0 ? (
//                         filteredProducts.map(product => (
//                             <div className="product-card" key={product.id}>
//                                 <img
//                                     src={product.thumbnail}
//                                     alt={product.title}
//                                 />
//                                 <h3>{product.title}</h3>
//                                 <p className="price">₹{product.price}</p>
//                                 <Link to={`/products/${product.id}`}>
//                                     More Info
//                                 </Link>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No products found 😕</p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Products








//pagination and search query using react

// import React, { useEffect, useState } from 'react'
// import { Link, useSearchParams } from 'react-router-dom'
// import { Datas } from '../Data'
// import "./Products.css"

// function Products() {
//     const [searchParams] = useSearchParams()
//     const category = searchParams.get("category")

//     const [searchQuery, setSearchQuery] = useState("")
//     const [currentPage, setCurrentPage] = useState(1)

//     const itemsPerPage = 6

//     // 1️⃣ Category filter
//     const categoryFiltered = category
//         ? Datas.filter(item => item.category === category)
//         : Datas

//     // 2️⃣ Search filter
//     const filteredProducts = categoryFiltered.filter(item =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     )

//     // 3️⃣ Pagination logic
//     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
//     const startIndex = (currentPage - 1) * itemsPerPage
//     const currentProducts = filteredProducts.slice(
//         startIndex,
//         startIndex + itemsPerPage
//     )

//     // 4️⃣ Reset page when search or category changes
//     useEffect(() => {
//         setCurrentPage(1)
//     }, [searchQuery, category])

//     return (
//         <section>
//             <div className="prod-detail">

//                 <h1 className="page-title">
//                     {category ? category.toUpperCase() : "PRODUCTS"}
//                 </h1>

//                 {/* 🔍 SEARCH */}
//                 <input
//                     type="text"
//                     placeholder="Search products..."
//                     className="search-input"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />

//                 {/* 🧱 PRODUCT GRID */}
//                 <div className="product-grid">
//                     {currentProducts.length > 0 ? (
//                         currentProducts.map(product => (
//                             <div className="product-card" key={product.id}>
//                                 <img src={product.thumbnail} alt={product.title} />
//                                 <h3>{product.title}</h3>
//                                 <p className="price">₹{product.price}</p>
//                                 <Link to={`/products/${product.id}`}>
//                                     More Info
//                                 </Link>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No products found 😕</p>
//                     )}
//                 </div>

//                 {/* 📄 PAGINATION */}
//                 {totalPages > 1 && (
//                     <div className="pagination">
//                         <button
//                             disabled={currentPage === 1}
//                             onClick={() => setCurrentPage(prev => prev - 1)}
//                         >
//                             Prev
//                         </button>

//                         <span>
//                             Page {currentPage} of {totalPages}
//                         </span>

//                         <button
//                             disabled={currentPage === totalPages}
//                             onClick={() => setCurrentPage(prev => prev + 1)}
//                         >
//                             Next
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </section>
//     )
// }

// export default Products



import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Datas } from '../Data'

import "./Products.css"
import useDebounce from '../useDebounce'

function Products() {
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category")

    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 6

    // ✅ Debounced search value
    const debouncedSearchQuery = useDebounce(searchQuery, 500)

    // 1️⃣ Category filter
    const categoryFiltered = category
        ? Datas.filter(item => item.category === category)
        : Datas

    // 2️⃣ Search filter (debounced)
    const filteredProducts = categoryFiltered.filter(item =>
        item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    )

    // 3️⃣ Pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentProducts = filteredProducts.slice(
        startIndex,
        startIndex + itemsPerPage
    )

    // 4️⃣ Reset page on search / category change
    useEffect(() => {
        setCurrentPage(1)
    }, [debouncedSearchQuery, category])

    return (
        <section>
            <div className="prod-detail">

                <h1 className="page-title">
                    {category ? category.toUpperCase() : "PRODUCTS"}
                </h1>

                {/* 🔍 Search */}
                <input
                    type="text"
                    placeholder="Search products..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* 🧱 Products */}
                <div className="product-grid">
                    {currentProducts.length > 0 ? (
                        currentProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p className="price">₹{product.price}</p>
                                <Link to={`/products/${product.id}`}>
                                    More Info
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No products found 😕</p>
                    )}
                </div>

                {/* 📄 Pagination */}
                {totalPages > 1 && (
                    <div className="pagination">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(p => p - 1)}
                        >
                            Prev
                        </button>

                        <span>
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(p => p + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Products