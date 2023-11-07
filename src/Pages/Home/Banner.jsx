
'use client';

import { Carousel, } from 'flowbite-react';


const Banner = () => {
  return (
    <div className="h-56 sm:h-[300px]  md:h-[600px] ">
    <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>

      <div className="bg-cover flex h-[700px]  items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        style={{backgroundImage: 'url(https://i.ibb.co/N6k0wcJ/jober.jpg)'}}> 
         <div className="hero-overlay bg-gradient-to-r from-[#2f2d2d] to-[rgba(21, 21, 21, 0)] ">
            <div className='mt-48 sm:mt-48 md:mt-36 flex flex-col p-14 sm:p-20  text-white'>
               <h1 className="text-lg md:text-3xl  md:mb-4 font-bold">Explore Exciting  <span className='text-cyan-500'>Opportunities</span> </h1>
               <p className="sm:mb-2 md:mb-8 text-xs md:text-base ">Discover the perfect job in web development, <br />
               digital marketing, and graphic design. Your next career move <br /> 
               starts here. Join us today and unlock a world of possibilities.</p>
               <button className="btn btn-sm btn-outline btn-info w-32 font-bold">Explore <i className="fa-solid fa-arrow-right "></i> </button>
            </div>
         </div>
      </div>

      <div className="bg-cover flex h-[700px]  items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        style={{backgroundImage: 'url(https://i.ibb.co/WGVRSN2/jober-2.jpg)'}}> 
         <div className="hero-overlay bg-gradient-to-r from-[#2f2d2d] to-[rgba(21, 21, 21, 0)] ">
            <div className='mt-48 sm:mt-48 md:mt-36 flex flex-col p-14 sm:p-20  text-white'>
               <h1 className="text-lg md:text-3xl  md:mb-4 font-bold">Explore Exciting  <span className='text-cyan-500'>Opportunities</span> </h1>
               <p className="sm:mb-2 md:mb-8 text-xs md:text-base ">Discover the perfect job in web development, <br />
               digital marketing, and graphic design. Your next career move <br /> 
               starts here. Join us today and unlock a world of possibilities.</p>
               <button className="btn btn-sm btn-outline btn-info w-32 font-bold">Explore <i className="fa-solid fa-arrow-right "></i> </button>
            </div>
         </div>
      </div>

      <div className="bg-cover flex h-[700px]  items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        style={{backgroundImage: 'url(https://i.ibb.co/qW8sPhr/jober-3.webp)'}}> 
         <div className="hero-overlay bg-gradient-to-r from-[#2f2d2d] to-[rgba(21, 21, 21, 0)] ">
            <div className='mt-48 sm:mt-48 md:mt-36 flex flex-col p-14 sm:p-20  text-white'>
               <h1 className="text-lg md:text-3xl  md:mb-4 font-bold">Explore Exciting  <span className='text-cyan-500'>Opportunities</span> </h1>
               <p className="sm:mb-2 md:mb-8 text-xs md:text-base ">Discover the perfect job in web development, <br />
               digital marketing, and graphic design. Your next career move <br /> 
               starts here. Join us today and unlock a world of possibilities.</p>
               <button className="btn btn-sm btn-outline btn-info w-32 font-bold">Explore <i className="fa-solid fa-arrow-right "></i> </button>
            </div>
         </div>
      </div>
      
      {/* <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src="https://i.ibb.co/qR43HyL/f5.jpg" alt="" />
      </div>
      
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src="https://i.ibb.co/zH0h0pF/f3.jpg" alt="" />
      </div> */}
      
    </Carousel>
  </div>
  );
};

export default Banner;


