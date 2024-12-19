import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
    
    <div className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
        <p className="text-sm text-gray-500 mt-1">Home &gt; Contact</p>
      </div>
    </div>

   
    <div className="max-w-6xl w-full mx-auto mt-10 px-4">
  <h2 className="text-3xl font-bold text-center text-gray-800">
    Get In Touch With Us
  </h2>
  <p className="text-center text-gray-500 mt-2">
    For more information about our product & services, please feel free to
    drop us an email. Our staff is always ready to help you out. Do not
    hesitate!
  </p>

  <div className="flex flex-col lg:flex-row mt-10 gap-8">
   
    <div className="w-full lg:w-1/2 space-y-6">
      {/* Address */}
      <div className="flex items-start space-x-4">
        <span className="text-2xl text-yellow-500">📍</span>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Address</h3>
          <p className="text-gray-500">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start space-x-4">
        <span className="text-2xl text-yellow-500">📞</span>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-500">
            Mobile: (+84) 546-6789 <br />
            Hotline: (+84) 456-6789
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <span className="text-2xl text-yellow-500">⏰</span>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Working Time
          </h3>
          <p className="text-gray-500">
            Monday–Friday: 9:00–22:00 <br />
            Saturday–Sunday: 9:00–21:00
          </p>
        </div>
      </div>
    </div>

   
    <div className="w-full lg:w-1/2 space-y-4">
      <form className="bg-white shadow-lg rounded-lg p-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Your name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Abc"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Abc@def.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

      
        <div>
          <label htmlFor="subject" className="block text-gray-700 font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="This is optional"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

       
        <button
          type="submit"
          className="w-full mt-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
 <br/>

 <div className="bg-yellow-50 py-8">
  <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between gap-8">
    {/* Icon 1 */}
    <div className="flex items-center space-x-4 sm:space-x-5 w-full sm:w-auto">
      <span className="text-3xl">🏆</span>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">High Quality</h3>
        <p className="text-gray-600 text-sm">Crafted from top materials</p>
      </div>
    </div>

    {/* Icon 2 */}
    <div className="flex items-center space-x-4 sm:space-x-5 w-full sm:w-auto">
      <span className="text-3xl">✔️</span>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Warranty Protection</h3>
        <p className="text-gray-600 text-sm">Over 2 years</p>
      </div>
    </div>

    {/* Icon 3 */}
    <div className="flex items-center space-x-4 sm:space-x-5 w-full sm:w-auto">
      <span className="text-3xl">📦</span>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Free Shipping</h3>
        <p className="text-gray-600 text-sm">Order over $150</p>
      </div>
    </div>

    {/* Icon 4 */}
    <div className="flex items-center space-x-4 sm:space-x-5 w-full sm:w-auto">
      <span className="text-3xl">🎧</span>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
        <p className="text-gray-600 text-sm">Dedicated support</p>
      </div>
    </div>
  </div>
</div>
 <br/>
  </div> 
  )
}

export default page