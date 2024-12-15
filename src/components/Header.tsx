import React from 'react'
import Image from 'next/image'
import logo1 from '../../public/images/logo1.png'
import account from '../../public/images/account.png'
import search from '../../public/images/Search.png'
import heart from '../../public/images/heart.png'
import wishlist from '../../public/images/cart1.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
   <div className="flex items-center space-x-4 p-4">

  <Image src={logo1} alt='logo' className="h-9 w-14"/>
  
  <span className="text-2xl font-bold"> <b> Furniro </b></span>
</div>
    <nav className="space-x-4">
      <a href="#" className="text-gray-600 hover:text-black">Home</a>
      <a href="/shop" className="text-gray-600 hover:text-black">Shop</a>
      <a href="/blog" className="text-gray-600 hover:text-black">Blog</a>
      <a href="/contact" className="text-gray-600 hover:text-black">Contact</a>
      {/* <a href="/products" className="text-gray-600 hover:text-black">Products</a> */}
    </nav>
    <div className="flex space-x-10">
    <Image src={account} alt='account' className='h-6 w-6'/>
    <Image src={search} alt='account' className='h-6 w-6'/>
    <Image src={heart} alt='account' className='h-6 w-6'/>
    <Image src={wishlist} alt='account' className='h-6 w-6'/>
  </div>
  </header>
  )
}

export default Header