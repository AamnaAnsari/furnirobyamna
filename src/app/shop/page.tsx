import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import lock from '../../public/images/lock.png'
import res from '../../../public/images/res.png'
import feature from '../../public/images/feature.png'
import rectangle from '../../../public/images/Rectangle.png'
import filter2 from '../../../public/images/fill2.jpg'
import Slyth from '../../../public/images/slyth.png'
import lolito from '../../../public/images/lolito.png'
import levi from '../../../public/images/levi.png'


const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-64">
        <Image src={rectangle} alt='hero' layout='fill' objectFit='cover'/>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-black font-bold">Shop</h1> <br/>
        </div>
          
      </header>

     
      <nav className="bg-white py-3 px-6">
        <ol className="flex space-x-4 text-gray-500">
          <li><a href="/">Home</a></li>
          <li> › </li>
          <li className="text-gray-700 font-semibold">Shop</li>
        </ol>
        <Image src={filter2} alt='show' className='w-full'/>
      </nav>

    
      <div className="px-6 py-4 bg-white flex flex-wrap items-center justify-between">
       
        {/* <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
          Filter
        </button>
        
          <label htmlFor="sort" className="text-gray-600">Sort by</label>
          <select id="sort" className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div> */}
      </div>

     {/* ///////////products ///////////// */}
     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
  {/* <!-- Product Card --> */}
  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    {/* <!-- New Badge --> */}
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>

    {/* <!-- Image --> */}
    <div className="relative">
    
      <Image src={Slyth} alt='Product1' className="w-full h-50 object-cover"/>
      
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
      
       <a href='/products'>  <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart  </span></a>
      </button>
    </div>

    {/* <!-- Content --> */}
    <div className="p-4">
      {/* <!-- Product Name --> */}
      <h2 className="text-lg font-semibold text-gray-800">Slytherine</h2>
      <small>stylish cafe chair</small>
      {/* <!-- Price Section --> */}
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        <p className="text-gray-500 line-through mr-2">Rp 3.500.000</p>
      </div>
    </div>
  </div>

  
  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={levi} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
      <a href='/products'>  <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart  </span></a>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Leviosa</h2>
      <small className='text-black'>stylish cafe chair</small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.000</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  {/* <!-- Add more cards as needed --> */}
  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={lolito} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
      <a href='/products'>  <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart  </span></a>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Lolito</h2>
      <small className='text-black'>Luxury big sofa</small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 500.000</p> &nbsp; &nbsp;
        <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p>
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={res} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
      <a href='/products'>  <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart  </span></a>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Respira</h2>
      <small className='text-black'>Outdoor bar table and stool </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 500.000</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>
  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={Slyth} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
      <a href='/products'>  <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart  </span></a>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Slytherine</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={levi} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
      <a href='/products'>  <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart  </span></a>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Leviosa</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={lolito} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
      <a href='/products'>  <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart  </span></a>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Lolito</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={res} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart</span>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Leviosa</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={res} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
      <a href='/products'>  <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart  </span></a>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Respira</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={Slyth} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart</span>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Slytherine</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={levi} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart</span>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Leviosa</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={res} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart</span>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Leviosa</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={lolito} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart</span>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Lolito</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={res} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart</span>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Respira</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>

  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={Slyth} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart</span>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Slytherine</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>


  <div className="relative bg-white shadow-md squared-lg overflow-hidden group">
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs uppercase px-2 py-1 squared-full">
      -30%
    </div>
    <div className="relative">
      <Image src={levi} alt='lolito luxury sofa' className="w-full h-50 object-cover"/>
      <button className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <span className="bg-yellow-600 px-4 py-2 squared-full">Add to Cart</span>
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">Leviosa</h2>
      <small className='text-black'>stylish cafe chair </small>
      <div className="flex items-center mt-2">
        <p className="text-black font-bold">Rp 2.500.00</p> &nbsp; &nbsp;
        {/* <p className="text-gray-500 line-through mr-2">Rp 14.000.000</p> */}
      </div>
    </div>
  </div>
</div>

<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="grid grid-cols-4 gap-6">
    {/* <!-- Box 1 --> */}
    <div className="w-24 h-24 bg-yellow-600 text-white flex items-center justify-center rounded-md cursor-pointer transition-transform transform hover:scale-110">
      1
    </div>
    {/* <!-- Box 2 --> */}
    <div className="w-24 h-24 bg-yellow-600 text-white flex items-center justify-center rounded-md cursor-pointer transition-transform transform hover:scale-110">
       2
    </div>
    {/* <!-- Box 3 --> */}
    <div className="w-24 h-24 bg-yellow-600 text-white flex items-center justify-center rounded-md cursor-pointer transition-transform transform hover:scale-110">
      3
    </div>
    {/* <!-- Box 4 --> */}
    <div className="w-24 h-24 bg-yellow-600 text-white flex items-center justify-center rounded-md cursor-pointer transition-transform transform hover:scale-110">
      Next
    </div>
  </div>
</div>

<div className="bg-yellow-50 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center gap-6">
        {/* Feature 1 */}
        <div className="flex items-center space-x-5">
          <span className="text-3xl">🏆</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">High Quality</h3>
            <p className="text-gray-600 text-sm">crafted from top materials</p>
          </div>
        </div>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        {/* Feature 2 */}
        <div className="flex items-center space-x-4">
          <span className="text-3xl">✔️</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Warranty Protection
            </h3>
            <p className="text-gray-600 text-sm">Over 2 years</p>
          </div>
        </div> &nbsp; &nbsp; &nbsp; &nbsp;

        {/* Feature 3 */}
        <div className="flex items-center space-x-4">
          <span className="text-3xl">📦</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Free Shipping</h3>
            <p className="text-gray-600 text-sm">Order over 150 $</p>
          </div>
        </div> &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;

        {/* Feature 4 */}
        <div className="flex items-center space-x-4">
          <span className="text-3xl">🎧</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default page