import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import lock from '../../public/images/lock.png'
import res from '../../public/images/res.png'
import feature from '../../public/images/feature.png'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('Rectangle.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Shop</h1>
        </div>
      </header>

     
      <nav className="bg-white py-3 px-6">
        <ol className="flex space-x-4 text-gray-500">
          <li><a href="/">Home</a></li>
          <li> › </li>
          <li className="text-gray-700 font-semibold">Shop</li>
        </ol>
      </nav>

    
      <div className="px-6 py-4 bg-white flex flex-wrap items-center justify-between">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
          Filter
        </button>
        <p className="text-gray-600">Showing 1–16 of 32 results</p>
        <div className="flex items-center space-x-2">
          <label htmlFor="show" className="text-gray-600">Show</label>
          <select id="show" className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">
            <option>16</option>
            <option>32</option>
          </select>
          <label htmlFor="sort" className="text-gray-600">Sort by</label>
          <select id="sort" className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <section className="px-6 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product Card */}
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={`/product-${(index % 4) + 1}.jpg`} alt="Product" className="h-40 w-full object-cover" />
              {index % 2 === 0 && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  -30%
                </span>
              )}
              {index === 3 && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Syltherine</h3>
              <p className="text-gray-500 text-sm">Stylish cafe chair</p>
              <p className="text-yellow-600 font-bold">Rp 2,500,000</p>
              <p className="text-gray-400 text-sm line-through">Rp 3,500,000</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
              {/* <button >
                Add to cart
              </button> */}
              <a href="/products" className="inline-block">
  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
    Add to Cart
  </button>
</a>
              <div className="flex space-x-2 text-gray-600">
                <button>❤️</button>
                <button>🔗</button>
                <button>⭐</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default page