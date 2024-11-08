import React,{ useEfect } from 'react'
import { HiMiniArrowLongUp } from "react-icons/hi2";



const Details1 = ({showModal1,setShowModal1}) => {

  
    
  return (
    <>
    {showModal1 && (
    <div className='flex justify-center'>
     <div className='flex flex-col items-start mt-10 bg-green-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-3xl
     bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat' data-aos="zoom-in" >
        <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'> Brief Description about Project :</p>

        <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Name :</span>RDK-B(Rdk WanManager) Open Source. 
        </li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Duration :</span>02 Dec,2020 to till
          </li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Software & Tools : </span>Yocoto , Jira, Jenkin, Git(VCS), draw.io(Design Tool)</li>
        
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Hardware & Tools:</span>Intel X86_64, AMD, ARM</li>
        <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Programming/ Scripting Language:</span>C, Python</li>
         <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Description:</span>Working on customer premises Equipment (CPE) device, working on WAN Manager, PPP Manager, XDSL &nbsp;&nbsp;&nbsp;&nbsp; Manager to manager different 
          physical interface for WAN and LAN IPs.</li>
         <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Role and Responsibility:</span>
         </li>
         <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Responsible for User Story creation ,Design and Development of features from User Story EPICs.</ul>
         <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Responsible for Software Design and Development for new feature and feature enhancement.</ul>
         <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Responsible for Understanding Architecture ,Designing Software and developing it.</ul>
         <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Responsible for Critical Bug Fixes and Regression Bug fixes.</ul>
         <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Knowledge sharing with team and ideas for team improvement and proposal for design improvement for existing features &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and new 
           features.</ul>
         <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Responsible for different component maintainability in RDK-B Wan Manager Eco-System. Like RdkWanManager , RdkVdsl &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Manager, RdkVlanManager, RdkPppManager.</ul>
        <div className='w-full flex justify-center mt-5'>
         <p onClick={()=>setShowModal1(false)} className='px-3 py-3 rounded-full bg-gradient-to-r from-green-600 to-[#ebc934] cursor-pointer animate-bounce'><HiMiniArrowLongUp /></p>
         </div>
     </div>
     </div>
    )}
    </>
  )
}

export default Details1