import React from 'react'
import Image from 'next/image'
import sofa from '../../../public/images/sofa.png'
import sofa1 from '../../../public/images/sofa1.png'
import Slyth from '../../../public/images/slyth.png'
import levi from '../../../public/images/levi.png'
import lolito from '../../../public/images/lolito.png'
import res from '../../../public/images/res.png'

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

          {/* <!-- Responsive Stars --> */}
  <div className="flex justify-start items-center mt-8 space-x-2 ml-0">
    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927a1 1 0 011.902 0l1.716 4.409 4.9.439a1 1 0 01.564 1.753l-3.684 3.074 1.106 4.833a1 1 0 01-1.451 1.054L10 15.347l-4.087 2.132a1 1 0 01-1.451-1.054l1.106-4.833-3.684-3.074a1 1 0 01.564-1.753l4.9-.439 1.716-4.409z"/>
    </svg>
    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927a1 1 0 011.902 0l1.716 4.409 4.9.439a1 1 0 01.564 1.753l-3.684 3.074 1.106 4.833a1 1 0 01-1.451 1.054L10 15.347l-4.087 2.132a1 1 0 01-1.451-1.054l1.106-4.833-3.684-3.074a1 1 0 01.564-1.753l4.9-.439 1.716-4.409z"/>
    </svg>
    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927a1 1 0 011.902 0l1.716 4.409 4.9.439a1 1 0 01.564 1.753l-3.684 3.074 1.106 4.833a1 1 0 01-1.451 1.054L10 15.347l-4.087 2.132a1 1 0 01-1.451-1.054l1.106-4.833-3.684-3.074a1 1 0 01.564-1.753l4.9-.439 1.716-4.409z"/>
    </svg>
    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927a1 1 0 011.902 0l1.716 4.409 4.9.439a1 1 0 01.564 1.753l-3.684 3.074 1.106 4.833a1 1 0 01-1.451 1.054L10 15.347l-4.087 2.132a1 1 0 01-1.451-1.054l1.106-4.833-3.684-3.074a1 1 0 01.564-1.753l4.9-.439 1.716-4.409z"/>
    </svg>
    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927a1 1 0 011.902 0l1.716 4.409 4.9.439a1 1 0 01.564 1.753l-3.684 3.074 1.106 4.833a1 1 0 01-1.451 1.054L10 15.347l-4.087 2.132a1 1 0 01-1.451-1.054l1.106-4.833-3.684-3.074a1 1 0 01.564-1.753l4.9-.439 1.716-4.409z"/>
    </svg>
  </div>

{/* //////////////////Sizez/////////// */}
<div className="mt-8 text-left w-full px-4">
    <h2 className="text-lg font-bold text-gray-800 mb-4">Sizes</h2>
    <div className="flex space-x-4">
      <div className="w-10 h-8 squared-full bg-yellow-300"><center>L</center></div>
      <div className="w-10 h-8 squared-full bg-yellow-300"><center>XL</center></div>
      <div className="w-10 h-8 squared-full bg-yellow-300"><center>XS</center></div>
    </div>
  </div>
  

  {/* <!-- Color Section --> */}
  <div className="mt-8 text-left w-full px-4">
    <h2 className="text-lg font-bold text-gray-800 mb-4">Color</h2>
    <div className="flex space-x-4">
      <div className="w-8 h-8 rounded-full bg-blue-500"></div>
      <div className="w-8 h-8 rounded-full bg-black"></div>
      <div className="w-8 h-8 rounded-full bg-yellow-600"></div>
    </div>
  </div>
          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
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
        <p className="mt-4 text-gray-600">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
        <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">

  <div className="flex flex-col md:flex-row items-center gap-6">
    {/* <!-- Image  --> */}
   
    <Image src={sofa1} alt='sofa' className="w-100 h-90 object-cover rounded-md shadow-md"/>

    <Image src={sofa1} alt='sofa' className="w-100 h-90 object-cover rounded-md shadow-md"/>
   
  </div>
  <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
  {/* <!-- Heading --> */}
  <h1 className="text-3xl font-bold text-black mb-6">Related Products</h1>

  {/* <!-- Responsive Cards --> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full px-4">
    {/* <!-- Card 1 --> */}
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
    
      <Image src={Slyth} alt='slytherine' className="w-80 h-80 object-cover squared-md mb-4"/>
      <h2 className="text-lg font-semibold text-gray-800">Slytherine</h2>
      <p className="text-gray-600">Description for card 1.</p>
     
    </div>

  
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
     
      <Image src={levi} alt='leviosa' className="w-80 h-80 object-cover squared-md mb-4"/>
      <h2 className="text-lg font-semibold text-gray-800">Leviosa</h2>
      <p className="text-gray-600">Description for card 2.</p>
     
    </div>

    
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
      {/* <img src="/path-to-image3.jpg" alt="Card 3" class=""> */}
      <Image src={lolito} alt='lolito' className='w-80 h-80 object-cover squared-md mb-4'/>
      <h2 className="text-lg font-semibold text-gray-800">Lolito</h2>
      <p className="text-gray-600">Description for card 3.</p>
    </div>

    
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
    <Image src={res} alt='respra' className='w-80 h-80 object-cover squared-md mb-4'/>
      <h2 className="text-lg font-semibold text-gray-800">Respira</h2>
      <p className="text-gray-600">Description for card 4.</p>
    </div>
    {/* <!-- Show More Button --> */}
    <div>
  
    <div className="flex justify-center w-full mt-6 ml-80">
    <button className="px-10 py-2 bg-yellow-600 text-white text-lg squared-md transition">Show More</button>
  </div>
</div>

  </div>
</div>

</div>


      </div>
     
    </div>
  )
}

export default page