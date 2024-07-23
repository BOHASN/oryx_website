import React from 'react';
import { ReactComponent as Copyright } from '../assets/Copyright.svg';

const Line = () => {
  return (
    <div className='bg-white max-w-[1240px] mx-auto pb-8 md:pt-14 pt-6 px-4 text-gray-300'>
      <div className='text-center'>
        <hr style={{ width: '90%', borderTop: '1px solid #2c586e', margin: '8px auto' }} />
        <div className='text-gray-400 text-[10px] md:mt-4 md:px-16 pt-2 font-gotham bgtext2 letterspacing1 font-semibold pr-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='flex items-center hover:scale-105 transform transition-transform duration-300'>
            <Copyright style={{ marginRight: '5px', marginBottom: '3px' }} />
            <span>2024 ORYX - All rights reserved</span>
          </div>
          <span className='hover:scale-105 transform transition-transform duration-300' style={{ marginLeft: 'auto' }}>Terms · Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Line;
