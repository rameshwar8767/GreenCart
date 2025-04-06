import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className="relative">
      {/* Background Images */}
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center px-4 md:px-12 lg:px-24 pb-24 md:pb-0">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left leading-tight lg:leading-snug max-w-[20rem] md:max-w-[28rem] lg:max-w-[40rem]">
          Fresh Groceries Delivered Fast – Right from GreenCart to Your Door!
        </h1>

        {/* Buttons */}
        <div className="flex items-center mt-6 font-medium gap-4">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white"
          >
            Shop now
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="md:hidden transition-transform group-focus:translate-x-1"
            />
          </Link>

          <Link
            to="/products"
            className="group hidden md:flex items-center gap-2 px-9 py-3 text-black hover:text-primary transition"
          >
            Explore deals
            <img
              src={assets.black_arrow_icon}
              alt="arrow"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
