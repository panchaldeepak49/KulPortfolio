import React from 'react';
import { HiMiniArrowLongUp } from "react-icons/hi2";

const Details4 = ({showModal4,setShowModal4}) => {

  return (
    <>
      {showModal4 && (
        <div className='flex justify-center'>
        <div className='flex flex-col items-start mt-10 bg-gray-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-3xl
        bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat' data-aos="zoom-in" >
           <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'> Brief Description about Project :</p>
   
           <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Name :</span> ISAM(DSLAM) </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Duration :</span> Sept,2018 -May,2019(Nokia Tech India)</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Software & Tools : </span>Power PC (MIPS 64)Processor ,clear case VCS</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Hardware & Tools:</span>MIPS 64 Processor ,DSL Access-Multiplex </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Programming/ Scripting Language:</span> C ,C++</li>
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Description:</span>I worked as a developer on DSLAM product of Nokia
            Tech in Management Layer (TL1,CLI).The work is 
            &nbsp;&nbsp;&nbsp;&nbsp;related with New Customer requirement of TL1 and CLI in ISAM product on Cavium Processor.The ISAM(DSLAM) product
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; support ISR cisco OS. The following is my current Project Description 
             </li>

           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This project involved design and development of ISAM which is called DLSAM. I 
            worked on feature XDSL and voice LT's 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interface for statistics collection and export to user space. </ul>

           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Added new table for few statistics of voice and videos communication status.
           Later I worked on broadcom chip of GPON 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;network to implement feature Multicast and Broadcast storm control. Which was one of the feature that Broadcom soc
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; support for traffic floods in network.
           </ul>

           {/* <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contributed to Development of USB PAL for OS to provide interface with CLI and Other management app.And develop code
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in C/C++ Based on Project requirement.</ul> */}
           
            
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Role and Responsibility:</span> User Story, EPIC, Architect and Design, Development and Bug Fixes for 
            RDK-B Open Source  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Components (Rdk Wan Manager,Rdk Vdsl Manager, Rdk Vlan Manager, Rdk PppManager) :</li>
            
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Bug solving ,Feature Enhancement Development ,Customer Cases.  </ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Communicating with hardware team. Collecting new register info and making necessary changes in Virtio and PCIe drivers.</ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Packet processing analysis from Vm's to VM regarding different feature supports.</ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Responsible for development ,Unit testing, S2C and committing in respective branches.</ul>
            
           <div className='w-full flex justify-center mt-5'>

            <p onClick={()=>setShowModal4(false)} className='px-3 py-3 rounded-full bg-gradient-to-r from-green-600 to-[#ebc934] cursor-pointer animate-bounce'><HiMiniArrowLongUp /></p>
            </div>
        </div>
        </div>
    
    )}
    </>
  )
}

export default Details4