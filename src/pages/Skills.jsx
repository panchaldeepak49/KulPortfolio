import React from 'react'

const Skills = () => {

  return (
    <>
    <div className='mt-10 flex flex-col items-center'>
    <div className=' w-[95%] sm:w-[80%] h-auto bg-black/[0.9] rounded-xl'>

    <div className=' font-semibold text-2xl sm:text-4xl py-6 flex flex-col justify-center items-center
     text-yellow-300'>Technical Skills
    <p className='h-[1px] bg-red-600 w-[90%] mt-5 '></p></div> 
    <p className='text-white text-xl px-8'>Major Skill Set :</p>
    {/* <p className='text-white text-lg px-8'>Embedded Linux</p> */}
    <ul className='list-disc mt-5 text-white text-base sm:text-lg pl-10 sm:pl-14 pb-10'>
      <li>Embedded Linux (4 yrs)</li>
      <li className='mt-1'>C, Linux, Networking (8 yrs)</li>
      <li className='mt-1'>Embedded Firmware (3 yrs)</li>
      <li className='mt-1'>IOS, IOS-XE OS (3 yrs)</li>
      <li className='mt-1'>IP/VOIP (2 yrs)</li>
      <li className='mt-1'>Virtualization/hypervisor </li>
      <li className='mt-1'>SR-IOV</li>
      <li className='mt-1'>Virtio /PCIe drivers</li>
      <li className='mt-1'>OVS (openvswitch)</li>
      <li className='mt-1'>Docker</li>
      <li className='mt-1'>Cmake</li>
      <li className='mt-1'>ONL, ONIE, ONLPM </li>
      <li className='mt-1'>USB Stack/cpu freq driver</li>
      <li className='mt-1'>System/sub-system component and service software architecture/Design and Development</li>
    </ul>

    </div> 
    </div> 
    
    </>
  )
}

export default Skills