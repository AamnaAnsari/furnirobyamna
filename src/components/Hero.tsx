import React from 'react'
import Image from 'next/image'
import wall from '../../public/images/wall.png'
import dining from '../../public/images/dining.png'
import living from '../../public/images/living.png'
import bed from '../../public/images/bed.png'
import slyth from '../../public/images/slyth.png'
import Products from '../../public/images/Products.png'
import share from '../../public/images/Share.png'
import lock from '../../public/images/lock.png'
import res from '../../public/images/res.png'
import feature from '../../public/images/feature.png'

const Hero = () => {
  return (
    <div className="container mx-auto">
      {/* Wrapper div for both sections */}
      <div className="space-y-12">
        {/* Hero Section */}
       
        <section className="relative w-full h-screen">
      {/* Background Image using <img> tag (clear) */}
    
      <Image src={wall} alt='hero'  className="absolute inset-0 w-full h-full object-cover"/>

      {/* Content Section */}
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 bg-amber-100 shadow-lg squared-lg p-6 w-80 h-80">
      <small className='text-black font-bold'>New Arrival</small>
    <h2 className="text-2xl font-bold mb-4 text-yellow-600">Discover Our New Collection</h2>
    <p className="text-black mb-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt maxime officiis doloribus velit.
    </p>
    <button className="bg-yellow-600 text-white px-4 py-2 squared">
      BUY NOW
    </button>
  </div>
     
    </section>

        {/* Image Section */}
        <section className="py-8 bg-gray-100 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Browse The Range
          </h2>
          <p className="text-gray-600 mb-8">
            Explore our collection of stunning images that showcase the beauty and
            diversity of our work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <div className="flex flex-col items-center">
            
              <Image src={dining} alt='dine'  className="w-50 rounded-lg shadow-md"/>
              <p className="mt-2 text-gray-700">Dining</p>
            </div>
            <div className="flex flex-col items-center">
            <Image src={living} alt='living room'  className="w-50 rounded-lg shadow-md"/>
              <p className="mt-2 text-gray-700">Living Room</p>
            </div>
            <div className="flex flex-col items-center">
            <Image src={bed} alt='bedroom'  className="w-50 rounded-lg shadow-md"/>
              <p className="mt-2 text-gray-700">Bedroom</p>
            </div>
          </div>
        </section>
      </div>
      <div className="container mx-auto py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        Our Featured Products
      </h2>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Card 1 */}
        <div className="relative bg-white rounded-lg shadow-lg p-4">
         
          <Image src={slyth} alt='slyth' className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Slytherine</h3>
          <p className="text-gray-600 mb-2">stylish cafe chair</p>
          <p className="text-xl font-bold text-black mb-4">RP $39.99</p>
          {/* Circle with Number */}
          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
            -30%
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white rounded-lg shadow-lg p-4">
          <Image src={lock} alt='image'  className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 2</h3>
          <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-xl font-bold text-black mb-4">$49.99</p>
          {/* Circle with Number */}
          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
            -50%
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-lg shadow-lg p-4">
         
          <Image src={res} alt='image'  className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 3</h3>
          <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-xl font-bold text-black mb-4">$59.99</p>
          {/* Circle with Number */}
          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
            3
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-white rounded-lg shadow-lg p-4">
         
          <Image src={feature} alt='faeture'  className="w-full h-64 object-cover rounded-md mb-4"/>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Product 4</h3>
          <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-xl font-bold text-black mb-4">$69.99</p>
          {/* Circle with Number */}
          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
            new
          </div>
        </div>
      </div>
    </div>

    

    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen py-12 px-6 bg-gray-100">
      {/* Left side: Heading, Description, and Button */}
      <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-black mb-4">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 mb-6">
        Our designer already made a lot of beautiful prototypes of rooms to inspire you.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">
          Explore More
        </button>
      </div>

      {/* Right side: Image */}
      <div className="lg:w-1/2 flex justify-center">
      
        <Image src={Products} alt='products'  className="w-full max-w-2xl squared-2xl shadow-lg" />
      </div>
    </div>

   <Image src={share} alt='share'/>
    </div>
  )
}

export default Hero