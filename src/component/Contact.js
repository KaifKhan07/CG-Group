import React from 'react'


const Contact = () => {
    return (
        <div className='contact-img flex flex-col justify-center items-center '>
            <div className='flex justify-center items-center '>
                <h1 className='text-white font-bold text-xl sm:text-3xl pb-10'>Ready to Grow Your Business?</h1>
            </div>

            <div className='flex gap-3'>
                <button className='bg-white border rounded-full text-sm px-2  text-red-600 sm:text-xl'>Start selling</button>
                <button className=' border rounded-full px-2 py-2 text-sm text-white sm:text-xl'>Chat with consultant</button>
            </div>


        </div>
    )
}

export default Contact
