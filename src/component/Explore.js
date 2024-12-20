import React from 'react'
import ExploreImage from '../assets/images/webp/maxresdefault.webp'

const Explore = () => {
    return (
        <div className='px-20 py-20'>
            <div className='flex  justify-center items-center'>

                <h1 className='text-center text-3xl w-[700px] font-bold text-gray-800 py-10'>1mdm.com is a leading ecommerce platform that
                    helps SMEs go global</h1>
            </div>
            <div className='flex gap-5 flex-col md:flex-row items-center '>

                <div className='h-[200px] w-[250px] md:h-[300px] md:w-[600px] border shadow-lg'>
                    <img src={ExploreImage} alt="" className='h-full w-full' />
                </div>

                <div>
                    <p className='pb-5 text-gray-800 '>Connect with millions of business buyers from around the world.</p>
                    <p className='pb-5 text-gray-800 '>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
                    <p className='pb-5 text-gray-800 '>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
                </div>
            </div>
        </div>
    )
}

export default Explore
