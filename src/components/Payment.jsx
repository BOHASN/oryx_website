import React from 'react';
import visacard from '../assets/visacard.svg';
import arrow from '../assets/arrow.svg';

const Payment = () => {
  return (
    <div className='bg-white py-4 flex flex-col items-center md:flex-row md:items-start justify-center'>
      <div className='md:flex mt-4 pl-4 md:justify-between  relative w-full max-w-6xl hover:scale-95 transform transition-transform duration-300'>
        <div className='mb-4 md:mb-0 md:flex-shrink-0 md:w-[1120px] md:max-w-screen-xl' style={{ height: '250px' }}>
          <div className='rounded-md videobackground text-white p-4 pt-10' style={{ width: '100%', height: '100%' }}>
            <h1 className='text-3xl font-semibold bgtext2 font-gotham letterspacing2'>Payment Varies</h1>
            <p className='bgtext1 pt-4 letterspacing1 w-full text-sm leading-tight font-gotham font-semibold md:w-80'>Allows users to accept various types of payments, such as cash, credit or debit cards, and e-wallets</p>
            <a href='https://wa.me/+96176760055'>
            <button className='bgtext2 font-gotham font-semibold pt-6 pb-4 md:px-8 letterspacing1 relative  hover:scale-95 transform transition-transform duration-300'>
            
              Learn More
              <img src={arrow} alt='Arrow' className='ml-2 w-4 h-4 inline' />
              
            </button>
            </a>
            
          </div>
        </div>
        <div className='mb-4 '>
          <div className='md:w-full md:max-w-md mr-10'>
            <img src={visacard} alt='Visa Card' className='object-cover md:absolute md:object-cover md:w-120 md:h-96 md:left-96 md:bottom-0 md:ml-40 mr-10 hover:scale-95 transform transition-transform duration-300' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
