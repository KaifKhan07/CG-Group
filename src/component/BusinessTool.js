import React from 'react'
import asset1 from '../assets/images/png/asset 1.png'

const BusinessTool = () => {
  return (
    <div>
      <div>
        <h1 className='text-red-800 font-bold text-2xl text-center py-5'>Grow your business with a suite of tools built for you</h1>
      </div>
      <div className='business-tool px-20 flex flex-col md:flex-row  justify-center items-center'>
        <div className='business-tool-left border-l-2 flex'>
          <div className='h-14 w-1 bg-red-600 '></div>
          <div className='flex flex-col gap-5'>

          <div className='pl-3 text-red-600'>
            <p>Custom</p>
            <p>Storefront</p>
          </div>

          <div className='pl-3'>
            <p>Advertising</p>
            <p>Tools</p>
          </div>

          <div className='pl-3'>
            <p>Data and</p>
            <p>analytics</p>
          </div>

          <div className='pl-3'>
            <p>Customer</p>
            <p>support</p>
          </div>

          </div>
        </div>

        <div className='business-tool-right flex flex-col md:flex-row    items-center justify-center  pt-16'>
          <div className='pl-0 md:pl-20'>
            <h1 className='text-3xl pb-3 text-gray-900'>Set up a store that showcases your brand</h1>

            <p className='text-gray-700'>Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!</p>
          </div>
          <div>
            <img src={asset1} alt="" className='h-full w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessTool
