import React from 'react'
import asset5 from '../assets/images/webp/asset 5.webp'

const Acheivement = () => {
    return (
        <div className='bg-[rgb(242,244,248)] py-20'>

            <h1 className='text-red-800 font-bold text-center pb-10 text-3xl'>Success stories from 1mdm.com sellers</h1>

            <div className="achivement flex flex-col mx-5 sm:flex-row sm:mx-20 mb-10 px-10 pt-10 gap-10 rounded-md items-center bg-white">

                <div className="left-achivement ">
                    <p className='text-gray-900'>Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional</p>
                </div>
                <div className="right-achivement h-[200px] w-[200px] sm:h-[400px] sm:w-[2000px]">
                    <img src={asset5} alt=""  className='h-full w-full rounded-lg'/>
                </div>
            </div>
        </div>
    )
}

export default Acheivement
