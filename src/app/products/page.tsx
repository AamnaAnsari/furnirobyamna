import React from 'react'
import Image from 'next/image'
import sofa from '../../../public/images/sofa.png'

const page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-white py-4 px-6">
        <ol className="flex space-x-2 text-gray-500">
          <li>
            <a href="/" className="hover:text-gray-800">
              Home
            </a>
          </li>
          <li>›</li>
          <li>
            <a href="/shop" className="hover:text-gray-800">
              Shop
            </a>
          </li>
          <li>›</li>
          <li className="text-gray-700 font-semibold">Asgaard Sofa</li>
        </ol>
      </nav>

      {/* Main Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <Image src={sofa} alt='sofa' className="w-full rounded-lg shadow-md"/>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Asgaard Sofa</h1>
          <p className="text-yellow-600 text-xl font-semibold mt-2">
            Rs. 250,000.00
          </p>
          <p className="mt-4 text-gray-600">
            Setting the bar as one of the best options in its class, the Asgaard
            sofa is compact, sturdy, and perfect for your living room setup.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
              Add To Cart
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
              Compare
            </button>
          </div>

          {/* Meta Information */}
          <div className="mt-6 text-gray-600">
            <p>SKU: 5001</p>
            <p>Category: Sofas</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800">Description</h2>
        <p className="mt-4 text-gray-600">
          Embodying the raw, wayward spirit of Scandinavian design, the Asgaard
          sofa blends comfort and durability. Perfect for any modern living
          room.
        </p>
      </div>
    </div>
  )
}

export default page