import React from 'react';

const Text = () => {
  return (
<div className='bg-white py-4 md:px-4 flex flex-col items-center md:flex-row md:items-start md:mb-24 md:mt-20 md:ml-14 ml-4 justify-center'>
      <div className='md:flex-shrink-0 md:mb-4'>
        <div>
          <h1 className='md:text-2xl sm:text-xl text-2xl font-extrabold font-gotham letterspacing bgtext2'>Streamline Your POS</h1>
          <h1 className='md:text-2xl sm:text-xl text-2xl font-extrabold font-gotham letterspacing bgtext2'> Operation with ORYX</h1>
        </div>
      </div>

      <div className='mt-10 md:mt-2 md:ml-[340px]'>
        <div className='w-[400px] left-0 flex-grow ml-8'>
          <p className='text-sm leading-tight font-gotham letterspacing2 bgtext1 font-semibold'>
            Simplify Store Operations
          </p>
          <p className='text-sm leading-tight font-gotham letterspacing2 bgtext1 font-semibold'>
            and Free Up Time with 
          </p>
          <p className='text-sm leading-tight font-gotham letterspacing2 bgtext1 font-semibold'>
            ORYX’s User-Friendly
          </p>
          <p className='text-sm leading-tight font-gotham letterspacing2 bgtext1 font-semibold'>
            POS System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text;
