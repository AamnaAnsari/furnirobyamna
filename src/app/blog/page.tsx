import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blog2 from '../../../public/images/blog1.png'
import laptop from '../../../public/images/laptop.png'
import blog3 from '../../../public/images/blog3.png'
import blog4 from '../../../public/images/blog4.webp'
import post1 from '../../../public/images/post1.png'
import post2 from '../../../public/images/post2.png'
import post3 from '../../../public/images/post3.png'
import post4 from '../../../public/images/post4.png'
import post5 from '../../../public/images/post5.png'

const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 w-full">
        {/* Background Image */}
       
        <Image src={blog2} alt='blog' className="absolute  w-full h-full object-cover"/>
       
      </div>

      
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
       
      <div className="w-full lg:w-3/4 px-4">

  <Image src={laptop} alt="laptop" className="rounded-lg shadow-md w-full h-auto object-cover"/>

 
  <div className="flex items-center text-sm text-gray-500 mt-4">
    <span className="mr-4">👤 Admin</span>
    <span className="mr-4">📅 14 Oct 2022</span>
    <span>🪵 Wood</span>
  </div>

  {/* Blog Post Title */}
  <h1 className="text-2xl md:text-3xl font-bold text-black mt-6">
    Going all-in with millennial design
  </h1>

  
  <p className="text-gray-700 mt-6 text-base md:text-lg leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
  </p>

 
  <p className="text-black mt-4 text-lg font-semibold underline cursor-pointer">Read More</p>
</div>


        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:pl-8">
          {/* Search Bar */}
          <div className="flex items-center border rounded-lg p-2 shadow-sm w-full max-w-xl mx-auto">
  <input
    type="text"
    placeholder="Search"
    className="flex-grow outline-none px-4 py-2 text-sm md:text-base rounded-lg focus:ring-2 focus:ring-yellow-500"
  />
  <button className="text-gray-600 p-2">
    🔍
  </button>
</div>


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
          {/* <div>Recent Posts</div> */}
          <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
 <br/>
  <h1 className="text-3xl font-bold text-black mb-6">Recent Posts</h1>

  
  <div className="flex flex-col md:flex-row items-center gap-6">
    {/* <!-- Image --> */}
    {/* <img src="/path-to-image.jpg" alt="Descriptive Text" class="w-64 h-64 object-cover rounded-md shadow-md"> */}
    <Image src={post1} alt='post1' className='"w-50 h-50 object-cover rounded-md shadow-md"'/> 

  </div> <br/>
  <div className='flex flex-col md:flex-row items-center gap-6'>
  <Image src={post2} alt='post2' className='"w-50 h-50 object-cover rounded-md shadow-md"'/> 
  </div> <br/>
  <div className='flex flex-col md:flex-row items-center gap-6'>
  <Image src={post3} alt='post3' className='"w-50 h-50 object-cover rounded-md shadow-md"'/> 
  </div> <br/>
  <div className='flex flex-col md:flex-row items-center gap-6'>
  <Image src={post4} alt='post4' className='"w-50 h-50 object-cover rounded-md shadow-md"'/> 
  </div> <br/>
  <div className='flex flex-col md:flex-row items-center gap-6'>
  <Image src={post5} alt='post5' className='"w-50 h-50 object-cover rounded-md shadow-md"'/> 
  </div> <br/>
</div>
        </div>
       
      </div>

     

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
       
      <div className="w-full lg:w-3/4 mx-auto px-4 sm:px-6 md:px-8">
 
  <Image src={blog3} alt="laptop" className="rounded-lg shadow-md w-full h-auto" />

  <div className="flex items-center text-lg text-gray-500 mt-4 space-x-4">
    <span>👤 Admin</span>
    <span>📅 14 Oct 2022</span>
    <span>🪵 Wood</span>
  </div>

 
  <h1 className="text-black mt-6 text-2xl sm:text-3xl font-semibold">Exploring new ways of decorating</h1>

  {/* Blog Post Content */}
  <p className="text-gray-700 mt-6 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
  </p>

  
  <p className="text-black underline mt-6 cursor-pointer hover:text-gray-700">Read More</p>
</div>



       {/* Sidebar Section */}
       <div className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:pl-8">
        

         {/* <h3 className="text-xl font-semibold mt-6">Categories</h3>
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
         </ul> */}
       </div>
     </div>

     <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
       
     <div className="w-full lg:w-3/4 mx-auto px-4 sm:px-6 md:px-8">
  {/* Blog Post Image */}
  <Image src={blog4} alt="laptop" className="rounded-lg shadow-md w-full h-auto" />

 
  <div className="flex items-center text-lg text-gray-500 mt-4 space-x-4">
    <span>👤 Admin</span>
    <span>📅 14 Oct 2022</span>
    <span>🪵 Wood</span>
  </div>

  {/* Blog Post Title */}
  <h1 className="text-black mt-6 text-2xl sm:text-3xl font-semibold">
    Handmade pieces that took time to make
  </h1>

  {/* Blog Post Content */}
  <p className="text-gray-700 mt-6 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
  </p>

  {/* Links */}
  <p className="text-black underline mt-6 cursor-pointer hover:text-gray-700">
    Read More
  </p>
</div>



       {/* Sidebar Section */}
       <div className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:pl-8">
         
       </div>
     </div>
    </div>
  )
}

export default Page