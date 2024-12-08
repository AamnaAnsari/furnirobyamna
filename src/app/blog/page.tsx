import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blog2 from '../../../public/images/blog1.png'
import laptop from '../../../public/images/laptop.png'

const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 w-full">
        {/* Background Image */}
       
        <Image src={blog2} alt='blog' className="absolute  w-full h-full object-cover"/>
        {/* Overlay Content */}
        {/* <div className="absolute inset-0 bg-white/75 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-black">Blog</h1>
          <p className="mt-2 text-gray-600">Home &gt; Blog</p>
        </div> */}
      </div>

      
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        {/* Blog Post Section */}
        <div className="w-full lg:w-3/4">
          {/* Blog Post Image */}
          
          <Image src={laptop} alt='laptop' className="rounded-lg shadow-md w-full" />

          {/* Blog Post Details */}
          <div className="flex items-center text-sm text-gray-500 mt-4">
            <span className="mr-4">👤 Admin</span>
            <span className="mr-4">📅 14 Oct 2022</span>
            <span>🪵 Wood</span>
          </div>

          {/* Blog Content */}
          <p className="text-gray-700 mt-6">
            This is a sample blog post with relevant content about the selected topic. Explore the description and learn more.
          </p>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:pl-8">
          {/* Search Bar */}
          <div className="flex items-center border rounded-lg p-2 shadow-sm">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow outline-none px-2"
            />
            <button className="text-gray-600">
              🔍
            </button>
          </div>

          {/* Categories */}
          <h3 className="text-xl font-semibold mt-6">Categories</h3>
          <ul className="mt-4 text-gray-600">
            <li className="flex justify-between">
              Crafts <span>2</span>
            </li>
            <li className="flex justify-between">
              Design <span>8</span>
            </li>
            <li className="flex justify-between">
              Handmade <span>7</span>
            </li>
            <li className="flex justify-between">
              Interior <span>1</span>
            </li>
            <li className="flex justify-between">
              Wood <span>6</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page