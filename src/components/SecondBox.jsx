import React from 'react';
import increasingarrowchart from '../assets/increasingarrowschart.svg';

const SecondBox = () => {
  return (
    <div className='bg-white py-4 px-4 flex flex-col items-center md:flex-row md:items-start  pb-8 md:mb-24 md:mt-0 justify-center'>
      <div className='md:flex mt-4 md:justify-between md:gap-4'>
        <div className='mb-4 md:mb-0 md:flex-shrink-0'>
          <div className='rounded-xl videobackground text-white p-4 pt-10 hover:scale-95 transform transition-transform duration-300' style={{ width: '100%', maxWidth: '450px', height: '250px' }}>
            <h1 className='text-3xl font-semibold bgtext2 font-gotham letterspacing2'>Stock Management</h1>
            <p className='text-sm bgtext1 font-gotham font-semibold pt-4 w-80 letterspacing1'>Eliminate Stock-Outs and Overstocking with ORYX's</p>
            <p className='text-sm bgtext1 font-gotham font-semibold w-80 letterspacing1'>Advanced Stock Management Tools.</p>
          </div>
        </div>
        <div className='mb-4 md:mb-0 ml-0 md:ml-4 md:flex-shrink-0 relative md:w-[720px] '>
          <div className='rounded-xl videobackground text-white p-4 pt-10 hover:scale-95 transform transition-transform duration-300' style={{ width: '100%', maxWidth: '720px', height: '250px' }}>
            <h1 className='text-3xl font-semibold bgtext2 font-gotham letterspacing2'>Analytics Orders</h1>
            <p className='text-sm bgtext1 font-gotham font-semibold pt-4 w-80 letterspacing1'>Track Store Performance with ORYX's Advanced Sales</p>
            <p className='text-sm bgtext1 font-gotham font-semibold w-80 letterspacing1'>Reporting and Analysis Features.</p>
            <img src={increasingarrowchart} alt="Increasing Arrow Chart" className="hover:scale-95 transform transition-transform duration-300 absolute bottom-0 right-0 pr-4 md:absolute md:object-cover md:w-120  md:left-96 md:bottom-0 md:ml-10 w-[160px] h-[100px] md:w-[260px] md:h-[200px] "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBox;
