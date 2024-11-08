import React from 'react';
import { HiMiniArrowLongUp } from "react-icons/hi2";

const Details3 = ({showModal3,setShowModal3}) => {
  return (
    <>
    {showModal3 && (
        <div className='flex justify-center'>
        <div className='flex flex-col items-start mt-10 bg-green-200 sm:w-[70%] py-6 px-4 sm:px-4 rounded-3xl
        bg-[url("/Images/ellipse/6.png")] bg-cover bg-no-repeat' data-aos="zoom-in" >
           <p className='font-semibold text-orange-500 text-xl sm:text-[2rem]'> Brief Description about Project :</p>
   
           <li className='mt-6 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Name :</span> Smart NIC </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Duration :</span> May,2019 -Sept,2019(Intel Tech India)</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Software & Tools : </span>Intel Xenon Network Processor ,Intel AFU FPGA Chip Linux 3.2 git VCS</li>
           
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Hardware & Tools:</span>Xenon Intel Processor ,Intel AFU FPGA </li>
           <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Programming/ Scripting Language:</span> C</li>
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Project Description:</span> Currently I am working as a developer of Intel Smart NIC project  
            Working on Virtio_net, Virtio_pci, virtio 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; driver.Working on virtualization/hypervisor SR-IOV and PCI virtualization concept. Working on open source OVS and user 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;space Intel driver too. </li>

           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It is completely a Cloud service provider project. Where we work on different 
            virtualization Technologies. </ul>

           <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project involved Design and Development cloud service provider NIC card and
           host software .We work on VM, VF and 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtio drivers for Virtualization Technologies. Like SR-IOV PCIe Interface Virtualization.Worked on open Vswitch(OVS) for 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;switching concepts in multi VM's environment host. Sometime work on Intel parapatry driver.Worked on open flow concept 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of flow update in OVS.</ul>

           {/* <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contributed to Development of USB PAL for OS to provide interface with CLI and Other management app.And develop code
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in C/C++ Based on Project requirement.</ul> */}
           
            
            <li className='mt-4 text-xs sm:text-[1rem]'><span className='font-semibold'>Role and Responsibility:</span> User Story, EPIC, Architect and Design, Development and Bug Fixes for 
            RDK-B Open Source  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Components (Rdk Wan Manager,Rdk Vdsl Manager, Rdk Vlan Manager, Rdk PppManager) :</li>
            
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Bug solving ,Feature Enhancement Development ,Customer Cases.  </ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Communicating with hardware team. Collecting new register info and making necessary changes in Virtio and PCIe drivers.</ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Packet processing analysis from Vm's to VM regarding different feature supports.</ul>
            <ul className='mt-4 text-xs sm:text-[1rem]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Responsible for development ,Unit testing, S2C and committing in respective branches.</ul>
            
           <div className='w-full flex justify-center mt-5'>

            <p onClick={()=>setShowModal3(false)} className='px-3 py-3 rounded-full bg-gradient-to-r from-green-600 to-[#ebc934] cursor-pointer animate-bounce'><HiMiniArrowLongUp /></p>
            </div>
        </div>
        </div>
    
    )}
    </>
  )
}

export default Details3