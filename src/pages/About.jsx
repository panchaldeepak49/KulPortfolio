import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex justify-center'>
    <div className='sm:mt-10 flex flex-col items-center bg-black/[0.9] w-[95%] sm:w-[80%] py-4 rounded-md'>
    {/* <h2 className='text-2xl sm:text-4xl font-semibold text-yellow-400'>About Me </h2> */}
    <div className='text-2xl sm:text-4xl font-semibold text-yellow-300'>About Me </div>
    {/* <hr className='border-red/[0.2]'></hr> */}
     <div className='h-[1px] bg-red-600 w-[90%] mt-5'></div>
    <p className='mt-5 px-4 sm:px-8 text-white text-lg sm:text-lg'>
        I am having total of 11 year of experience in embedded software industry , worked on different technology and system. Major experience in C 
        language and Network domain.Worked on different processor platform from monolithic kernel to uClinux kernel. Worked of different level of firmware like low level firmware, 
        medium level firmware to kernel based firmware
    </p>

    <p className='mt-5 px-4 sm:px-8 text-white text-lg sm:text-lg'>
    Experience in multiple network protocols and drivers, worked in Linux kernel driver and porting and board bring up. Worked on kernel config 
        for ARM platform and device root file system.
    </p>

    <p className='mt-5 px-4 sm:px-8 text-white text-lg sm:text-lg'>
    Initial 3.5 year worked on firmware for voice device over Ethernet, here contribute to Voice module for I2S interface, memory interface with I2C 
         and uClinux networking stack, VoIP stack and PPP stack.
    </p>
    
    <p className='mt-5 px-4 sm:px-8 text-white text-lg sm:text-lg'>
    Worked for Cisco cat3k device for PoE(Power over Ethernet) Interface firmware, new feature development, enhancement, and critical bug fixes 
        and design/code improvement .
    </p>

    <p className='mt-5 px-4 sm:px-8 text-white text-lg sm:text-lg'>
    Worked on Smart NIC for intel cloud server, SR-IOV, Virtual drivers and Open virtual switch and flow control management of forwarding plans 
         in Smart NIC firmware.
    </p>

    <p className='mt-5 px-4 sm:px-8 text-white text-lg sm:text-lg'>
    Worked on full build environment support for Infinera ThanOS using Cmake build environment for cross platform support, contribute to USB 
    stack to notify User space for USB hot plugin/plugout. Design and development of feature and critical bug fixes.
    </p>

    <p className='mt-5 px-4 sm:px-8 text-white text-lg sm:text-lg'>
    Worked on RDK-B Broadband open-source community for RdkWanManager team to contribute to Design and development and bug fixes in 
        Wan Manager eco system. Understanding requirement based on EPIC and User story and understanding User story and design software and 
        developing code based on product and feature requirement.
    </p>

    <p className='mt-5 px-4 sm:px-8 text-white text-lg sm:text-lg'>
    Contribute in yocto based build environment support for cross platform and different meta OEM layers. Proposed design and improvement for 
         yocoto build layer and system architecture improvement and application layer design and architecture improvement and design.
    </p>

    <p className='mt-5 px-4 sm:px-8 text-white text-lg sm:text-lg'>
    Always Focusing on to improve my skills in software architecture and software design knowledge and update myself with new technology and 
         ready to take new challenges.
    </p>

    
    <div className='flex justify-center mt-10 pb-4'>
            {/* <img className='h-36 w-55 rounded-xl' src='./Images/ReactJS-developer.gif' alt='missing'></img> */}
    </div>
    
    </div>
    </div>
    </>
  )
}

export default About