import React from 'react';
import { HiMiniArrowLongUp } from "react-icons/hi2";

const Details8 = ({showModal8,setShowModal8}) => {
  return (

    <>
    {showModal8 && (
        <div className='flex justify-center'>
        <div className='flex flex-col items-start mt-10 bg-gray-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-3xl
        bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat' data-aos="zoom-in" >
           <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'> Brief Description about Project :</p>
   
           <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Name :</span> ROIP (Radio over IP) for Radio Communication on ROIP-3(Platform).</li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Duration :</span> July,2012 to March,2014</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Software & Tools : </span>LPC 24xx Philips processor, Keil vision4 IDE, arm-elf-Tool Chain Philips uC Controller(ARM 7),uCLinux </li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Hardware & Tools:</span> (ARM 7 )Controller LPC 24XX, ROIP-3(platform)   </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Programming/ Scripting Language:</span> C, Make File, Id Script </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Description:</span> In this project we have developed the Radio communication over IP network protocols.
           The project 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comprises of uCLinux, Network Stack, I2S Voice Module with G711 code. It is interfaced with I2C memory chip for runtime 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;configuration saving.
            </li>
           
           {/* <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Added new table for few statistics of voice and videos communication status.
           Later I worked on broadcom chip of GPON 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;network to implement feature Multicast and Broadcast storm control. Which was one of the feature that Broadcom soc
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; support for traffic floods in network.
           </ul> */}

           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Improved the design for uCLinux network stack based on Project requirement.
           </ul>
           
            
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Role and Responsibility:</span> Design and Development of New features for Radio over IP network stack.
            Improvement of existing 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;design and Bug fixes.
            </li>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unit testing and Integration testing with other Modules. I2S audio stack implementation and Testing. 
             </ul>
             <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Code review and debugging critical issues.
             </ul>
            
            <div className='w-full flex justify-center mt-5'>
              <p onClick={()=>setShowModal8(false)} className='px-3 py-3 rounded-full bg-gradient-to-r from-green-600 to-[#ebc934] cursor-pointer animate-bounce'><HiMiniArrowLongUp /></p>
            </div>
        </div>
        </div>
    
    )}
    </>
  )
}

export default Details8