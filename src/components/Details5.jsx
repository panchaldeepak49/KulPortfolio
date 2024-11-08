import React from 'react';
import { HiMiniArrowLongUp } from "react-icons/hi2";

const Details5 = ({showModal5,setShowModal5}) => {
  return (
    <>
      {showModal5 && (
        <div className='flex justify-center'>
        <div className='flex flex-col items-start mt-10 bg-green-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-3xl
        bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat' data-aos="zoom-in" >
           <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'> Brief Description about Project :</p>
   
           <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Name :</span> Power Over Ethernet (POE) on Cisko Catalyst Product Cat3k </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Duration :</span> March,2016 to Aug,2018</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Software & Tools : </span>Cavium Octeon, Network Processor, SDK, Linux2.6, View Open grok, Clear case, Jira for Defect Tracking </li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Hardware & Tools:</span>Cavium OCTEON Network Processor  </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Programming/ Scripting Language:</span> C </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Description:</span>This project involved Design and Development of Enterprise Catalyst Switch.
            This Switches having POE 
            &nbsp;&nbsp;&nbsp;&nbsp;support ,POE is a Power Over Ethernet feature .In which Ethernet have a capability to provide upto 60W Power on Ethernet .
            &nbsp;&nbsp;&nbsp;&nbsp;POE is categoried in three ways :
            1)POE, 2)POE+ ,3)UPOE .This is categorised based on solving related to POE and customer
            &nbsp;&nbsp;&nbsp;&nbsp; issue on POE.</li>

           {/* <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Added new table for few statistics of voice and videos communication status.
           Later I worked on broadcom chip of GPON 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;network to implement feature Multicast and Broadcast storm control. Which was one of the feature that Broadcom soc
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; support for traffic floods in network.
           </ul> */}

           {/* <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contributed to Development of USB PAL for OS to provide interface with CLI and Other management app.And develop code
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in C/C++ Based on Project requirement.</ul> */}
           
            
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Role and Responsibility:</span> User Story, EPIC, Architect and Design, Development and Bug Fixes for 
            RDK-B Open Source  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Components (Rdk Wan Manager,Rdk Vdsl Manager, Rdk Vlan Manager, Rdk PppManager) :</li>
            
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Responsible for POE Firmware Design,Development and Bug fixes ,Feature Enhancement Development and Bug fixes,
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Feature Enhancement Development ,Critical Customer Cases.   </ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Responsible for communicating with different teams and collecting info to making necessary changes in POE component.</ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Responsible for Development, Unit testing, S2C and committing in respective braches .</ul>
            
            
           <div className='w-full flex justify-center mt-5'>

            <p onClick={()=>setShowModal5(false)} className='px-3 py-3 rounded-full bg-gradient-to-r from-green-600 to-[#ebc934] cursor-pointer animate-bounce'><HiMiniArrowLongUp /></p>
            </div>
        </div>
        </div>
    
    )}
    </>
  )
}

export default Details5