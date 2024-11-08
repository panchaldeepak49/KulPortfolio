import React from 'react';
import { HiMiniArrowLongUp } from "react-icons/hi2";

const Details7 = ({showModal7,setShowModal7}) => {

  return (
    <>
      {showModal7 && (
        <div className='flex justify-center'>
        <div className='flex flex-col items-start mt-10 bg-green-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-3xl
        bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat' data-aos="zoom-in" >
           <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'> Brief Description about Project :</p>
   
           <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Name :</span> PPPoE protocol support in uClinux Network Stack for RoIP Platform.</li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Duration :</span> March,2014 to June,2014</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Software & Tools : </span>Keil Vision4 IDE, arm-elf-Tool Chain</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Hardware & Tools:</span> LPC 24xx Philips processor  </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Programming/ Scripting Language:</span> C, Make File, Id Script </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Description:</span> In this project we have implemented PPP over Ethernet Protocols in UcLinux
           Network Stack to provide 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WAP IP to RoIP devices. We implemented the PPPoE protocols from scratch with help of RFCs. It includes the implementation 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of other PPP supporting protocols like LCP, NCP(IPCP). </li>
           
           {/* <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Added new table for few statistics of voice and videos communication status.
           Later I worked on broadcom chip of GPON 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;network to implement feature Multicast and Broadcast storm control. Which was one of the feature that Broadcom soc
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; support for traffic floods in network.
           </ul> */}

           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integrated DHCP uCLinux open source code in our project and integrated DNS supported from uCLinux
           open source to our 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;project.</ul>
           
            
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Role and Responsibility:</span> Design ,Implementation and Debugging PPP over Ethernet Stack in uCLinux from 
            scratch with RFCs.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Porting/Integration and Testing of DHCP and DNS in RoIP project .
            </li>
            
            <div className='w-full flex justify-center mt-5'>
              <p onClick={()=>setShowModal7(false)} className='px-3 py-3 rounded-full bg-gradient-to-r from-green-600 to-[#ebc934] cursor-pointer animate-bounce'><HiMiniArrowLongUp /></p>
            </div>
        </div>
        </div>
    
    )}
    </>
  )
}

export default Details7