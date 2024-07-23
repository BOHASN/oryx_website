import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-white max-w-[1240px] mx-auto pt-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
      <div className='lg:col-span-1'>
        <p className='bgtext2 text-sm font-semibold pt-4 font-gotham letterspacing1 pl-6 md:pl-20'>
          Effortlessly manage your store with our reliable POS system.
        </p>
        <div className='flex items-center mt-6 pl-6 md:pl-20'>
  <a href='https://www.facebook.com' className='bgtext2 mr-4 hover:scale-125 transform transition-transform duration-300'>
    <FaFacebook size={30} />
  </a>
  <a href='https://www.instagram.com' className='backgroundbox2 rounded-full w-8 h-8 flex items-center justify-center text-white hover:scale-125 transform transition-transform duration-300'>
    <FaInstagram size={20} />
  </a>
  <a href='https://www.youtube.com/@OryxPOS' className='backgroundbox2 rounded-full w-8 h-8 ml-4 flex items-center justify-center text-white hover:scale-125 transform transition-transform duration-300'>
    <FaYoutube size={20} />
  </a>
</div>

      </div>
      <div class="lg:col-span-2 bg-white py-4 flex flex-col lg:flex-row lg:pl-60  md:pl-20 pl-0">
        <div class="flex flex-col ml-8">
          <h6 class='font-bold text-sm bgtext2 font-gotham w-32 letterspacing1 pb-4  hover:scale-105 transform transition-transform duration-300'>Products</h6>
          <ul>
            <li class='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Our product</li>
            <li class='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Pricing</li>
            <li class='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Log in</li>
            <li class='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Compliance</li>
          </ul>
        </div>

        <div className='flex flex-col ml-8 mt-4 lg:mt-0'>
          <h6 className='font-bold text-sm bgtext2 font-gotham w-32 letterspacing1 pb-4  hover:scale-105 transform transition-transform duration-300'>About us</h6>
          <ul>
            <li className='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>About ORYX</li>
            <li className='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Contact us</li>
            <li className='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Features</li>
            <li className='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Career</li>
          </ul>
        </div>

        <div className='flex flex-col ml-8 mt-4 lg:mt-0'>
          <h6 className='font-bold text-sm bgtext2 font-gotham w-32 letterspacing1 pb-4  hover:scale-105 transform transition-transform duration-300' >Resources</h6>
          <ul>
            <li className='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham '>Help Center</li>
            <li className='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Server Status</li>
            <li className='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Blog</li>
            <li className='py-2  hover:scale-95 transform transition-transform duration-300 letterspacing1 text-sm bgtext2 font-gotham'>Community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
