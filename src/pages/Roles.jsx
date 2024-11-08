import React,{ useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Roles = () => {

  useEffect(()=>{
    Aos.init({ duration: 1000 });
  },[]);

  return (
    <>
    <div data-aos="flip-right" className='mt-10 flex flex-col items-center '>
    <div className=' w-[95%] sm:w-[80%] h-auto bg-black/[0.9] rounded-xl'>

    <div className=' font-semibold text-2xl sm:text-4xl py-6 flex flex-col justify-center items-center
     text-yellow-300'>Roles
    <p className='h-[1px] bg-red-600 w-[90%] mt-5 '></p>
    </div> 
    
    <div className='flex justify-center'>
    <ul className='list-disc  text-white text-lg sm:text-2xl pl-2 sm:pl-14 pb-10'>
      <li>Senior Embedded Software Engineer</li>
      <li className='mt-3'>Lead Embedded Software Engineer</li>
      <li className='mt-3'>Software Design/Architect Engineer</li>
    </ul>
    </div>


    </div> 
    </div> 
    </>
  )
}

export default Roles