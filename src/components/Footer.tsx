import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-10">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Address Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Funiro.</h3>
        <p className="text-gray-600 text-sm mt-2">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Links</h3>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-600 text-sm">Home</li>
          <li className="text-gray-600 text-sm">Shop</li>
          <li className="text-gray-600 text-sm">About</li>
          <li className="text-gray-600 text-sm">Contact</li>
        </ul>
      </div>

      {/* Help Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Help</h3>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-600 text-sm">Payment Options</li>
          <li className="text-gray-600 text-sm">Returns</li>
          <li className="text-gray-600 text-sm">Privacy Policies</li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
        <div className="mt-2">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-sm"
          />
          <button className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition text-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          © 2023 Funiro. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer