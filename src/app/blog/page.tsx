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
        {/* Overlay Content */}
        {/* <div className="absolute inset-0 bg-white/75 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-black">Blog</h1>
          <p className="mt-2 text-gray-600">Home &gt; Blog</p>
        </div> */}
      </div>

      
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
       
        <div className="w-full lg:w-3/4">
          {/* Blog Post Image */}
          
          <Image src={laptop} alt='laptop' className="rounded-lg shadow-md w-full" />

          
          <div className="flex items-center text-lg text-gray-500 mt-4">
            <span className="mr-4">👤 Admin</span>
            <span className="mr-4">📅 14 Oct 2022</span>
            <span>🪵 Wood</span>
          </div>

          <h1 className='text-black mt-6 text-2xl'>Going all-in with millennial design</h1>
          <p className="text-gray-700 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum
          </p> <br/>
          <p className='text-black underline'>Read More</p>
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
  {/* <!-- Heading --> */} <br/>
  <h1 className="text-3xl font-bold text-black mb-6">Recent Posts</h1>

  {/* <!-- Image and Text Side by Side --> */}
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
       
       <div className="w-full lg:w-3/4">
         {/* Blog Post Image */}
         
         <Image src={blog3} alt='laptop' className="rounded-lg shadow-md w-full" />

         
         <div className="flex items-center text-lg text-gray-500 mt-4">
           <span className="mr-4">👤 Admin</span>
           <span className="mr-4">📅 14 Oct 2022</span>
           <span>🪵 Wood</span>
         </div>

         <h1 className='text-black mt-6 text-2xl'>Exploring new ways of decorating</h1>
         <p className="text-gray-700 mt-6">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum
         </p> <br/>
         <p className='text-black underline'>Read More</p>
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
       
       <div className="w-full lg:w-3/4">
         {/* Blog Post Image */}
         
         <Image src={blog4} alt='laptop' className="rounded-lg shadow-md w-full" />

         
         <div className="flex items-center text-lg text-gray-500 mt-4">
           <span className="mr-4">👤 Admin</span>
           <span className="mr-4">📅 14 Oct 2022</span>
           <span>🪵 Wood</span>
         </div>

         <h1 className='text-black mt-6 text-2xl'>Handmade pieces that took time to make
         </h1>
         <p className="text-gray-700 mt-6">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum
         </p> <br/>
         <p className='text-black underline'>Read More</p>
       </div>


       {/* Sidebar Section */}
       <div className="w-full lg:w-1/4 mt-8 lg:mt-0 lg:pl-8">
         {/* Search Bar */}
         {/* <div className="flex items-center border rounded-lg p-2 shadow-sm">
           <input
             type="text"
             placeholder="Search"
             className="flex-grow outline-none px-2"
           />
           <button className="text-gray-600">
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
             Wood <span>6</span>
           </li>
         </ul> */}
       </div>
     </div>
    </div>
  )
}

export default Page