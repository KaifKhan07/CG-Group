import React from 'react'
import footerLogo from '../assets/images/png/asset 9.png'

const Footer = () => {
    return (
        <>

        
        <div className='footer bg-black text-white flex flex-col justify-around items-center gap-10 py-20  md:flex-row'>
            <div className="left-side  ">
                <img src={footerLogo} alt="" />
                <p className='text-gray-400'>One Medical Device</p>
                <p className='text-gray-400'> Market Place</p>
            </div>

            <div className="right-side flex flex-wrap flex-col gap-10 sm:flex-row justify-center items-center sm:gap-32">
                <ul>
                    <li className='font-bold pb-5'>Platform</li>
                    <li className='text-gray-400 text-xs pb-2'>Sell on 1MDM</li>
                    <li className='text-gray-400 text-xs pb-2'>Pricing</li>
                    <li className='text-gray-400 text-xs pb-2'>About us</li>
                    <li className='text-gray-400 text-xs pb-2'>Our Story</li>
                    <li className='text-gray-400 text-xs pb-2'>Carrers</li>
                    <li className='text-gray-400 text-xs pb-2'>Blog</li>
                    <li className='text-gray-400 text-xs pb-2'>Brands</li>
                </ul>

                <ul>
                    <li className='font-bold pb-5'>PressRoom</li>
                    <li className='text-gray-400 pb-5 text-xs'>Images & B-roll</li>
                    <li className='font-bold pb-5'>Policies</li>
                    <li className='text-gray-400 text-xs pb-2'>Terms Of Service</li>
                    <li className='text-gray-400 text-xs pb-2'>Privacy Policy</li>
                    <li className='text-gray-400 text-xs pb-2'>Delivery Information</li>
                </ul>
                <ul>
                    <li className='font-bold pb-5'>Reach Us</li>
                    <li className='text-gray-400 text-xs pb-2'>Corporate Information</li>
                    <li className='text-gray-400 text-xs pb-2'>Contact us</li>
                </ul>
            </div>

        </div>
        <div className='bg-[rgb(255,255,255)] text-center py-5'>
        <p>© 2024 1MDM ⚡ by SuperLabs</p>

        </div>
        </>
    )
}

export default Footer
