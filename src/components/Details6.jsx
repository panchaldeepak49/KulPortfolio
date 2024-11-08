import React from 'react';
import { HiMiniArrowLongUp } from "react-icons/hi2";

const Details6 = ({showModal6,setShowModal6}) => {

  return (
    <>
      {showModal6 && (
        <div className='flex justify-center'>
        <div className='flex flex-col items-start mt-10 bg-gray-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-3xl
        bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat' data-aos="zoom-in" >
           <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'> Brief Description about Project :</p>
   
           <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Name :</span> Single and Multi-User VoIP Stack Support for RoIP</li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Duration :</span> June,2014 to Jan,2016</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Software & Tools : </span>Keil Vision4 IDE, arm-elf-Tool Chain</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Hardware & Tools:</span>LPC 24xx Philips processor  </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Programming/ Scripting Language:</span> C, Make File, Id Script </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Description:</span>In this project we have provided support of VoIP Stack from Scratch for RoIP Devices.
            We have
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;implemented the VoIP Stack support in uCLinux .Implemented Call processing like one to one calls, call forwarding, conference 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;call on RoIP devices. With this project RoIP can directly communicate with any 3rd party VoIP support Phones. </li>
           

           {/* <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Added new table for few statistics of voice and videos communication status.
           Later I worked on broadcom chip of GPON 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;network to implement feature Multicast and Broadcast storm control. Which was one of the feature that Broadcom soc
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; support for traffic floods in network.
           </ul> */}

           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VoIP stak includes few other network protocols like SIP,SDP,RTP,RTCP. We have implemented single user and multiple user 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interface in Single RoIP device.</ul>
           
            
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Role and Responsibility:</span> Responsible for Design and Development the VoIP stack in uClinux from scratch for RoIP devices .
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Implemented all supporting protocols to make VoIP stack work like SIP , SDP, RTP.</li>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Responsible for code unit testing, module integration testing and system testing with other VoIP supported phones.
               </ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Responsible for communicating with different teams like hardware and UI interface to control RoIP through Web UI 
            &nbsp;&nbsp;&nbsp;&nbsp; interface.</ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Responsible for RoIP Web Configuration Implementation .In HTML code and TCP/IP stack to provide HTTP Access of Web 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Config  .</ul>
            
            
           <div className='w-full flex justify-center mt-5'>

            <p onClick={()=>setShowModal6(false)} className='px-3 py-3 rounded-full bg-gradient-to-r from-green-600 to-[#ebc934] cursor-pointer animate-bounce'><HiMiniArrowLongUp /></p>
            </div>
        </div>
        </div>
    
    )}
    </>
  )
}

export default Details6