import React from 'react';
import aboutoryx from '../assets/aboutoryx.svg';
import ReactPlayer from 'react-player';

const About = () => {
  return (
    <section id='about' className='flex justify-center'>
      <div className='bg-white py-16 px-4 flex flex-col items-center md:flex-row md:items-start md:ml-14 max-w-screen-xl w-full'>
      <div className='mb-4 md:mb-0 md:mr-8 '>
        <img src={aboutoryx} alt="ORYX Logo" className='w-full md:w-auto  hover:scale-95 transform transition-transform duration-300' />
        <div className='ml-4 max-w-md flex-grow'>
          <p className='text-sm leading-tight font-gotham letterspacing2 bgtext1 font-semibold mb-20 mt-16'>
          ORYX POS sales tracking features provide userswith valuable insights into product performancesales trends,and customer behavior.
          </p>
        </div>
        <div className='mt-4 md:mt-0 md:flex ml-4'>
          <div className='rounded-xl backgroundbox1 text-white p-6 hover:scale-105 transform transition-transform duration-300' style={{ width: '180px', height: '128px' }}>
            <h1 className='text-4xl pb-3 font-bold letterspacing2 font-gotham'>2018</h1>
            <h2 className='text-sm pl-0.5 font-semibold letterspacing2 font-gotham'>Since</h2>
          </div>
          <div className='md:ml-4 rounded-lg backgroundbox2 text-white p-6 mt-8 md:mt-0 hover:scale-105 transform transition-transform duration-300' style={{ width: '228px', height: '128px' }}>
            <h1 className='text-4xl pb-3 font-bold letterspacing2 font-gotham text-white'>800 +</h1>
            <h2 className='text-sm pl-0.5 font-semibold letterspacing2 font-gotham'>Used By</h2>
          </div>
        </div>
        <div className='md:mt-32 ml-8 mr-10 mt-10'>
          <h1 className='md:text-2xl sm:text-xl text-2xl font-extrabold font-gotham letterspacing bgtext2'>
            Take Your ORYX POS System
          </h1>
          <h1 className='md:text-2xl sm:text-xl text-2xl font-extrabold font-gotham letterspacing bgtext2'>
            To The Next Level
          </h1>
        </div>
      </div>

      <div className='mt-8 md:mt-2 xl:w-[550px]'>
        <div className='rounded-lg videobackground text-white p-8  hover:scale-105 transform transition-transform duration-300' style={{ width: '100%', maxWidth: '550px', height: '385px' }}>
          <ReactPlayer
            url="https://youtu.be/99bSun8NOho?si=OMPMnETEg3y7DOli"
            width='100%'
            height='100%'
            controls={false}
            playing={true}
            loop={true}
          />
        </div>
        <div className='max-w-md md:ml-0 md:mt-32 md:pl-40 pl-3 mt-14'>
          <p className='text-sm leading-tight font-gotham letterspacing2 bgtext1 font-semibold'>
          Effortlessly manage your inventory, sales, and customer relationshipswith ORYX's user-friendly platform.
          </p>
       
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;