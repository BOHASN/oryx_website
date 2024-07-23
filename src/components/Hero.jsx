import React from 'react';
import oryxpointofsale from '../assets/oryxpointofsale.svg';
import posdevice from '../assets/posdevice.svg';
import waves from '../assets/waves.svg';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white gradient-bg relative pt-14 overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-between items-center max-w-[1240px] mx-20 px-4 text-white relative z-10'>
        <div className='md:mb-0 hover:scale-95 transform transition-transform duration-300'>
          <img src={oryxpointofsale} alt="/" />
        </div>
        <div className='bgbutton rounded-xl z-10 hover:scale-95 transform transition-transform duration-300 '>
  <ul className={'hidden md:flex items-center font-gotham font-semibold '}>
    <li className='p-1 pr-20 pl-10 text-xl letterspacing2 hover:scale-110 transform transition-transform duration-300'>
      <BrowserRouter>
      <Link to='#home'>HOME</Link>
      </BrowserRouter>
    </li>
    <li className='p-1 pr-15 pl-15 text-xl letterspacing2 hover:scale-110 transform transition-transform duration-300'>
    <BrowserRouter>
      <Link to='#about'>ABOUT</Link>
      </BrowserRouter>
    </li>
    <li className='p-1 pr-10 pl-20 text-xl letterspacing2 hover:scale-110 transform transition-transform duration-300'>
      <a href='https://wa.me/+96176760055'>CONTACT</a>
    </li>
  </ul>
</div>

      </div>

      <img
        src={waves}
        alt='Waves'
        className='absolute inset-0 w-full h-full object-cover max-w-full md:h-full bottom-0 pointer-events-none'
      />

      <div className='max-w-full mt-[-96px] w-full h-screen md:mx-24 mx-10 text-start flex flex-col justify-center'>
        <div className='md:hidden mb-8 text-center hover:scale-105 transform transition-transform duration-300'>
          <img
            src={posdevice}
            alt='POS Device'
            style={{ width: '250px', height: '250px' }}
            className='object-cover relative z-10 pointer-events-none '
          />
        </div>

        <h1 className='md:text-2xl md:mt-20 sm:text-lg text-xl font-bold font-gotham letterspacing md:w-[400px] w-96'>
        ORYX POS Effortlessly mange your system with our reliable POS
        </h1>
        <h1 className='md:text-[12px] mt-8 sm:text-lg font-bold font-gotham letterspacing1 md:w-[360px] w-[320px]' style={{ lineHeight: '1.2' }}>
  Streaming Sales, track memory, and grow your business with ease - all in one place
</h1>

<div className='md:text-sm'>
  <a href='https://wa.me/+96176760055'>
    <button className='border w-[150px] rounded-2xl font-medium mt-10 mx-0 py-3 text-white hover:scale-95 transform transition-transform duration-300'>
      <h1 className='font-gotham letterspacing2'>Get Started</h1>
    </button>
  </a>
</div>

      </div>

      <div className='hidden md:block pos-device-background absolute right-0 top-1/2 transform -translate-y-1/2 '>
        <div className='relative hover:scale-95 transform transition-transform duration-300'>
          <img
            src={posdevice}
            alt='POS Device'
            style={{ width: '500px', height: '500px' }}
            className='object-cover mr-40 md:mt-32 relative z-10 pointer-events-none'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;