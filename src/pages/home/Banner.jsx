import React from 'react'
import bannerimg from "/images/banner.png"
import { FaBagShopping } from 'react-icons/fa6';

const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
      <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
        {/* img */}
        <div className='md:w-1/2'>
            <img src={bannerimg} alt="" />
        </div>

        <div className='md:w-1/2'>
            <h1 className='text-5xl font-light mb-5'>Collections</h1>
            <p className='text-xl mb-5'>You can explore and shop many different collection from various brand here.</p>
            <button className='bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex gap-2 items-center'><FaBagShopping className="inline-flex" />Shop Now</button>
        </div>
        
      </div>
    </div>
  )
}

export default Banner
