import React from 'react';
import whitearrow from '../assets/whitearrow.svg';

const ThirdBox = () => {
  return (
    <div className='bg-white md:py-4 md:px-4 pt-10 md:pt-20 pb-10 md:pb-20 flex flex-col md:flex-row items-start py-4 md:pl-10  md:items-start md:mb-24 md:mt-0 justify-center'>
      <div className='md:flex mt-4 justify-between md:gap-4 relative w-full md:max-w-6xl'>
        <div className='mb-4 md:mb-0 md:flex-shrink-0 md:w-[1120px] '>
          <div className='rounded-xl gradient-bg1 text-white p-6 relative  hover:scale-95 transform transition-transform duration-300' style={{ width: '100%', height: '180px' }}>
            <h1 className='md:text-3xl text-sm font-semibold text-white font-gotham letterspacing2 md:w-[500px]'>Try our Store POS system Check Out Prices & How to get it</h1>
            <a href='https://wa.me/+96176760055'>
            <button className='absolute bottom-0 md:right-10 mb-8 md:mb-14 text-white letterspacing1 text-sm font-gotham font-medium bgbutton rounded-xl md:w-44 w-40 md:pr-2 h-10  hover:scale-95 transform transition-transform duration-300'>
              Learn More
              <img src={whitearrow} alt='Whitearrow' className='ml-2 w-4 h-4 inline' />
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdBox;
