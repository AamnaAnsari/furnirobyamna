import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
    <div className="text-xl font-bold">Logo</div>
    <nav className="space-x-4">
      <a href="#" className="text-gray-600 hover:text-black">Home</a>
      <a href="/shop" className="text-gray-600 hover:text-black">Shop</a>
      <a href="/blog" className="text-gray-600 hover:text-black">Blog</a>
      <a href="/contact" className="text-gray-600 hover:text-black">Contact</a>
      {/* <a href="/products" className="text-gray-600 hover:text-black">Products</a> */}
    </nav>
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded-md px-2 py-1"
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
        Search
      </button>
    </div>
  </header>
  )
}

export default Header