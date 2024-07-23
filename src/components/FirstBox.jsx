import React from 'react';
import managementlogo from '../assets/managementlogo.svg';
import increasearrow from '../assets/increasedarrow.svg';
import handeffective from '../assets/handeffective.svg';

const FirstBox = () => {
  return (
    <div className='bg-white py-4  flex flex-col items-center md:flex-row md:items-start md:mb-24 md:mt-20 justify-center'>
      <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
        <div className='mb-4 md:mb-0 md:mr-4 md:flex-shrink-0'>
          <div className='rounded-xl videobackground text-white p-4 hover:scale-95 transform transition-transform duration-300' style={{ width: '100%', maxWidth: '350px', height: '250px' }}>
            <div className='profile-container gradient-bg rounded-full w-16 h-16 mb-4 hover:scale-105 transform transition-transform duration-300'> 
              <img src={managementlogo} alt='Management Logo' className='hover:scale-105 transform transition-transform duration-300 w-[80%] h-[80%] object-cover pl-3 pt-2.5' />
            </div>
            <h1 className='text-lg font-semibold bgtext2 font-gotham'>Effective inventory management</h1>
            <p className='text-sm bgtext1 font-gotham font-semibold pt-4 letterspacing1'>ORYX simplifies Inventory management with features such as stock tracking and automatic recording, and low stock notification</p>
          </div>
        </div>
        <div className='mb-4 md:mb-0 ml-0 md:ml-4 md:flex-shrink-0'>
          <div className='rounded-xl videobackground text-white p-4 hover:scale-95 transform transition-transform duration-300' style={{ width: '100%', maxWidth: '350px', height: '250px' }}>
            <div className='profile-container gradient-bg rounded-full w-16 h-16 mb-4 hover:scale-105 transform transition-transform duration-300'> 
              <img src={increasearrow} alt='Management Logo' className='hover:scale-105 transform transition-transform duration-300 w-46 h-46 object-cover pl-4 pt-2.5' />
            </div>
            <h1 className='text-lg font-semibold bgtext2 font-gotham'>Increase sale</h1>
            <p className='text-sm bgtext1 font-gotham font-semibold pt-4 letterspacing1'>ORYX sales tracking features provide users with valuable insights into product performance, sales trends, and customer behavior.</p>
          </div>
        </div>
        <div className='mb-4 md:mb-0 ml-0 md:ml-4 md:flex-shrink-0'>
          <div className='rounded-xl videobackground text-white p-4 hover:scale-95 transform transition-transform duration-300' style={{ width: '100%', maxWidth: '350px', height: '250px' }}>
            <div className='profile-container gradient-bg rounded-full w-16 h-16 mb-4 hover:scale-105 transform transition-transform duration-300'> 
              <img src={handeffective} alt='Management Logo' className='hover:scale-105 transform transition-transform duration-300 w-[80%] h-[80%] object-cover pl-3 pt-2.5' />
            </div>
            <h1 className='text-lg font-semibold bgtext2 font-gotham'>Effective customer management</h1>
            <p className='text-sm bgtext1 font-gotham font-semibold pt-4 letterspacing1'>ORYX simplifies customer management with easy access to customer data, purchase history, and other relevant information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstBox;
