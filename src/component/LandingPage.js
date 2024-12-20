import React from 'react';

const LandingPage = () => {
  return (
    <div className='landingPage py-[170px] sm:py-[130px] px-6 md:px-24'>

      <div className='MainImage flex flex-col md:flex-row justify-between items-center'>
        {/* Left Section */}
        <div className="left-sec flex flex-col gap-[40px] md:gap-[80px] text-center md:text-left">
          <div>
            <div className='text-[24px] font-semibold text-[rgb(33,37,41)]'>
              Sell on 1mdm.com
            </div>
            <div className='text-[28px] md:text-[41px] text-[rgb(33,37,41)] font-bold'>
              Reach millions of B2B buyers <p className='inline-block'>globally</p>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-3'>
            <button className='bg-[rgb(237,28,36)] text-white text-[16px] rounded-3xl px-5 py-2 w-full md:w-auto'>
              Start Selling
            </button>
            <button className='border text-[red] text-[16px] rounded-3xl transition-all duration-300 border-[rgb(237,28,36)] px-6 py-2 w-full md:w-auto hover:bg-[rgb(237,28,36)] hover:text-white'>
              Chat with consultant
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-sec flex flex-col gap-8 mt-12 md:mt-0 text-center md:text-left">
          <div>
            <div className='text-[28px] font-semibold text-[rgb(33,37,41)]'>26,000,000</div>
            <p className='text-[16px]'>active buyers globally</p>
          </div>
          <div>
            <div className='text-[28px] font-semibold text-[rgb(33,37,41)]'>400,000</div>
            <p className='text-[16px]'>product inquiries daily</p>
          </div>
          <div>
            <div className='text-[28px] font-semibold text-[rgb(33,37,41)]'>200</div>
            <p className='text-[16px]'>countries and regions represented</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
