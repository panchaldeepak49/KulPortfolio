import React from 'react'
import { HiMiniArrowLongUp } from "react-icons/hi2";


const Details2 = ({showModal2,setShowModal2}) => {
  return (
    <>
     {showModal2 && (
        <div className='flex justify-center'>
        <div className='flex flex-col items-start mt-10 bg-gray-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-3xl
        bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat' data-aos="zoom-in" >
           <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'> Brief Description about Project :</p>
   
           <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Name :</span>ThanOS(Infinera OS)  
           </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Duration :</span>02 Dec,2020 to till
             </li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Software & Tools : </span>ONL, ONIE, ONLPM, Docker, Debian Pkg. 
           Linux 4.19.81, Kernel Config, JIRA, Jinkins git VCS, CPU Power <span className='invisible '>Hello </span> CPU info, CPU power, linux-utils udev</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Hardware & Tools:</span>Intel X86_64, AMD, ARM</li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Programming/ Scripting Language:</span>C, C++, Cmake, Python </li>
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Description:</span> I am maintaining ONL Kernel, ONIE and Debian Rootfs for Infinera OS. Worked on Docker Image and 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Container to Provide Infinera OS application Build Environment.Do ONL kernel Config and build based on OS requirement. 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Worked on Debian Rootfs with Multistrap to provide for OS. worked on ARM64 toolchain to build Infinera OS application
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Library for ARM64 Processor. </li>
           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Worked on Cpufreq Driver for X86_64 Processor to fix CPU frequency Issue. worked on USB Driver Stack to provide PAL 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Platform Abstraction Layer) support to Infinera OS. USB Client Driver, Hotplug, Udev and Kernel uevent for USB.</ul>
           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Worked on optical switches, worked online Card and Controller card Based on project requirement. Developed and
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maintaining ONL kernel and Debian based Rootfs for Infinera OS. </ul>
           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contributed to Development of USB PAL for OS to provide interface with CLI and Other management app.And develop code
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in C/C++ Based on Project requirement.</ul>
           
            
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Role and Responsibility:</span> User Story, EPIC, Architect and Design, Development and Bug Fixes for topic :</li>
            
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Dockerfile and Image maintain.  </ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. ONL Kernel and Rootfs maintain</ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. USB PAL dev for Infinera OS.</ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Code Writing and OS Framework maintain.</ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Based on Project requirement (Infinera OS) get new assignment</ul>
           <div className='w-full flex justify-center mt-5'>
            <p onClick={()=>setShowModal2(false)} className='px-3 py-3 rounded-full bg-gradient-to-r from-green-600 to-[#ebc934] cursor-pointer animate-bounce'><HiMiniArrowLongUp /></p>
            </div>
        </div>
        </div>
    
    )}
    </>
  )
}

export default Details2