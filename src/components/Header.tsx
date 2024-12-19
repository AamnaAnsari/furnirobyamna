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
  
      <div className="flex items-center space-x-4">
        <Image src={logo1} alt="logo" className="h-9 w-14" />
        <span className="text-2xl font-bold"> <b> Furniro </b></span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
  <a href="/" className="text-gray-600 hover:text-black text-lg">
    Home
  </a>
  <a href="/shop" className="text-gray-600 hover:text-black text-lg">
    Shop
  </a>
  <a href="/blog" className="text-gray-600 hover:text-black text-lg">
    Blog
  </a>
  <a href="/contact" className="text-gray-600 hover:text-black text-lg">
    Contact
  </a>
</nav>


      {/* Icons Section */}
      <div className="flex space-x-6">
        <Image src={account} alt="account" className="h-6 w-6" />
        <Image src={search} alt="search" className="h-6 w-6" />
        <Image src={heart} alt="heart" className="h-6 w-6" />
        <Image src={wishlist} alt="wishlist" className="h-6 w-6" />
      </div>

     
      <div className="md:hidden flex items-center space-x-2">
        <Image src={account} alt="account" className="h-6 w-6" />
        <Image src={search} alt="search" className="h-6 w-6" />
        <Image src={heart} alt="heart" className="h-6 w-6" />
        <Image src={wishlist} alt="wishlist" className="h-6 w-6" />
      </div>
    </header>
  )
}

export default Header