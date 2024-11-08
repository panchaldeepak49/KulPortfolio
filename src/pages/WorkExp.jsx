import React,{ useState,useEffect  } from 'react'
import Button from '../components/GlobalComponents/Button';
import Details1 from '../components/Details1';
import Details2 from '../components/Details2';
import Details3 from '../components/Details3';
import Details4 from '../components/Details4';
import Details5 from '../components/Details5';
import Details6 from '../components/Details6';
import Details7 from '../components/Details7';
import Details8 from '../components/Details8';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WorkExp = () => {

    useEffect(()=>{
        Aos.init({ duration: 1000 });
      },[]);

    const [showModal1,setShowModal1] = useState(false); 
    const [showModal2,setShowModal2] = useState(false); 
    const [showModal3,setShowModal3] = useState(false); 
    const [showModal4,setShowModal4] = useState(false); 
    const [showModal5,setShowModal5] = useState(false); 
    const [showModal6,setShowModal6] = useState(false); 
    const [showModal7,setShowModal7] = useState(false); 
    const [showModal8,setShowModal8] = useState(false); 

  return (
    <>
    {/* <div className='flex  justify-center mt-10'>
    <div className='flex flex-col items-center    sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10
     bg-cover' data-aos="zoom-in" >
        <p className='font-semibold  text-green-700 text-xl sm:text-[2rem]'>Work Experience :</p>
        <p className='mt-4 font-Serif font-semibold sm:text-[1.75rem]'></p>
        <p className='mt-4 font-Serif font-semibold sm:text-[1.75rem]'></p> 
         <p className='mt-4 font-Serif font-semibold sm:text-[1.75rem]'></p>
        </div>    
    </div> */}
     
     {/* Experience--1 */}
    
    <div  className='flex justify-center mt-10 z-0 '>

        <div  className='w-[95%] sm:w-[80%] bg-black/[0.9] rounded-xl'>
          <p className='py-5 flex flex-col items-center font-semibold text-2xl sm:text-4xl text-yellow-300'>Work Experience :
          <p className='h-[1px] bg-red-600 w-[90%] mt-5 '></p></p>
   
    <div className='grid grid-cols-2 py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="zoom-in" >
        <div className='w-[60%]'>
         <p className='sm:font-Dancing pl-2 text-xs sm:text-lg bg-green-200 rounded-md'>Company Name :</p>
         <p className='sm:font-Dancing mt-2  pl-2 text-xs sm:text-lg bg-red-200 rounded-md'>Employment Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-green-200 rounded-md'>Client Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-red-200 rounded-md'>Work Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-green-200 rounded-md'>Designation :</p>
        </div>

        <div className=' w-[120%] -ml-8 sm:-ml-32 '>
            <p className='font-Poppins pl-2 text-xs sm:text-lg bg-green-200 rounded-md'><span className='font-Poppins'>GAK Enterprise Limited</span>, Milton Keynes United Kingdom</p>
            <p className='font-Poppins pl-2 text-xs mt-2 sm:text-lg bg-red-200 rounded-md'>02 Dec,2020 to till</p>
            <p className='font-Poppins pl-2 text-xs mt-2 sm:text-lg bg-green-200 rounded-md'><span className='font-Poppins'>Sky PLC</span>, Brentwood United King.</p>
            <p className='font-Poppins pl-2 text-xs mt-2 sm:text-lg bg-red-200 rounded-md'>02 Dec,2020 to till</p>
            <p className='font-Poppins pl-2 text-xs mt-2 sm:text-lg bg-green-200 rounded-md'>Senior Software Engineer</p>
            
            { window.innerWidth > 600 ? 
            <Button showModal={showModal1} setShowModal={setShowModal1} text={'Know more'}></Button>
            : " " }
       
        </div> 
        </div>
        </div>
    </div>
    <Details1 showModal1={showModal1} setShowModal1={setShowModal1}/>

    {/* Experience--2 */}

    <div className='flex  justify-center mt-5 sm:mt-10'>
    <div className='grid grid-cols-2 bg-black w-[95%]  sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="fade-down-right" >
        <div className=' w-[60%]'>
         <p className='sm:font-Dancing pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Company Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>Employment Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Client Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>Work Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Designation :</p>
        </div>

        <div className=' w-[120%] -ml-8 sm:-ml-32 '>
            <p className='font-Poppins pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'><span className='font-Poppins '>Infinera India Private Ltd</span>, Banglore India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>Sept,2019 to Nov,2020 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-blue-200 rounded-md'><span className='font-Poppins '>Infinera India Pvt Ltd</span>, Banglore India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>Sept,2019 to Nov,2020</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Senior Software Engineer</p>
            
            { window.innerWidth > 600 ? 
            <Button showModal={showModal2} setShowModal={setShowModal2} text={'Know more'}></Button>
            : " " }
        </div>
        </div> 
        
    </div>
    <Details2 showModal2={showModal2} setShowModal2={setShowModal2}/>

    {/* Experience--3 */}

    <div className='flex  justify-center mt-5 sm:mt-10'>
    <div className='grid grid-cols-2 bg-black w-[95%]  sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="fade-down-left" >
        <div className=' w-[60%]'>
         <p className='sm:font-Dancing pl-2  text-xs sm:text-lg bg-green-200 rounded-md'>Company Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-[#fc862b] rounded-md'>Employment Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-green-200 rounded-md'>Client Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-[#fc862b] rounded-md'>Work Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-green-200 rounded-md'>Designation :</p>
        </div>

        <div className=' w-[120%] -ml-8 sm:-ml-32 '>
            <p className='font-Poppins pl-2 text-xs sm:text-lg bg-green-200 rounded-md'><span className='font-Poppins '>L & T Technologies Services</span>, Chennai India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-[#fc862b] rounded-md'>Sept,2018 to Sept,2019 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-green-200 rounded-md'><span className='font-Poppins '>Intel Technologies</span>, Banglore India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-[#fc862b] rounded-md'>May,2019 to Sept,2019</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-green-200 rounded-md'>Senior Software Engineer</p>
            
            { window.innerWidth > 600 ? 
            <Button showModal={showModal3} setShowModal={setShowModal3} text={'Know more'}></Button>
            : " " }
        </div>
        </div>    
    </div>
    <Details3 showModal3={showModal3} setShowModal3={setShowModal3} />

    {/* Experience--4 */}

    <div className='flex  justify-center mt-5 sm:mt-10'>
    <div className='grid grid-cols-2 bg-black w-[95%]  sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="zoom-in" >
        <div className=' w-[60%]'>
         <p className='sm:font-Dancing pl-2  text-xs sm:text-lg bg-blue-200 rounded-md'>Company Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-orange-300 rounded-md'>Employment Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 font-Syne text-xs sm:text-lg bg-blue-200 rounded-md'>Client Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-orange-300 rounded-md'>Work Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Designation :</p>
        </div>

        <div className=' w-[120%] -ml-8 sm:-ml-32 '>
            <p className='font-Poppins pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'><span className='font-Poppins'>L & T Technologies Services</span>, Chennai India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-orange-300 rounded-md'>Sept,2018 to Sept,2019 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-blue-200 rounded-md'><span className='font-Poppins'>Nokia Technologies</span>, Chennai India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-orange-300 rounded-md'>Sept,2018 to May,2019 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Senior Software Engineer</p>
            
            { window.innerWidth > 600 ? 
            <Button showModal={showModal4} setShowModal={setShowModal4} text={'Know more'}></Button> 
            : " " }
        </div>
        </div>    
       </div>
       <Details4 showModal4={showModal4} setShowModal4={setShowModal4} />

    {/* Experience--5 */}

    <div className='flex  justify-center mt-5 sm:mt-10'>
    <div className='grid grid-cols-2 bg-black w-[95%]  sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="fade-down-right" >
        <div className=' w-[60%]'>
         <p className='sm:font-Dancing pl-2  text-xs sm:text-lg bg-green-200 rounded-md'>Company Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>Employment Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 font-Syne text-xs sm:text-lg bg-green-200 rounded-md'>Client Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>Work Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-green-200 rounded-md'>Designation :</p>
        </div>

        <div className=' w-[120%] -ml-8 sm:-ml-32 '>
            <p className='font-Poppins pl-2 text-xs sm:text-lg bg-green-200 rounded-md'><span className='font-Poppins '>HCL Technologies Limited</span>, Chennai India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>March,2016 to Aug,2018 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-green-200 rounded-md'><span className='font-Poppins '>HCL Technologies Ltd</span>, Chennai India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>March,2016 to Aug,2018 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-green-200  rounded-md'>Senior Software Engineer</p>
            { window.innerWidth > 600 ? 
            <Button showModal={showModal5} setShowModal={setShowModal5} text={'Know more'}></Button>
            : " " }
        </div>
        </div>    
    </div>
    <Details5 showModal5={showModal5} setShowModal5={setShowModal5} />

    {/* Experience--6 */}

    <div className='flex  justify-center mt-5 sm:mt-10'>
    <div className='grid grid-cols-2 bg-black w-[95%]  sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="fade-down-left" >
        <div className=' w-[60%]'>
         <p className='sm:font-Dancing pl-2  text-xs sm:text-lg bg-blue-200 rounded-md'>Company Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-[#fc862b] rounded-md'>Employment Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 font-Syne text-xs sm:text-lg bg-blue-200 rounded-md'>Client Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-[#fc862b] rounded-md'>Work Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Designation :</p>
        </div>

        <div className=' w-[120%] -ml-8 sm:-ml-32 '>
            <p className='font-Poppins pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'><span className='font-Poppins '>Pulse Communications System Pvt Ltd</span>, New Delhi India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-[#fc862b] rounded-md'>July,2012 to Jan,2016 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-blue-200 rounded-md '><span className='font-Poppins '>Pulse Communications System Pvt Ltd,</span>New Delhi India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-[#fc862b] rounded-md'>June,2014 to Jan,2016 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Software Engineer</p>
            { window.innerWidth > 600 ? 
            <Button showModal={showModal6} setShowModal={setShowModal6} text={'Know more'}></Button>
            : " " }
        </div>
        </div>    
    </div>
    <Details6 showModal6={showModal6} setShowModal6={setShowModal6} />
    
    {/* Experience--7 */}

    <div className='flex  justify-center mt-5 sm:mt-10'>
    <div className='grid grid-cols-2 bg-black w-[95%]   sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="zoom-in" >
        <div className=' w-[60%]'>
         <p className='sm:font-Dancing pl-2  text-xs sm:text-lg bg-green-200 rounded-md'>Company Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-orange-300 rounded-md'>Employment Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-green-200 rounded-md'>Client Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-orange-300 rounded-md'>Work Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-green-200 rounded-md'>Designation :</p>
        </div>

        <div className=' w-[120%] -ml-8 sm:-ml-32 '>
            <p className='font-Poppins pl-2 text-xs sm:text-lg bg-green-200 rounded-md'><span className='font-Poppins '>Pulse Communications System Pvt Ltd</span>, New Delhi India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-orange-300 rounded-md'>July,2012 to Jan,2016 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-green-200 rounded-md'><span className='font-Poppins '>Pulse Communications System Pvt Ltd ,</span> New Delhi India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-orange-300 rounded-md'>March,2014 to June,2014 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-green-200 rounded-md'>Software Engineer</p>
            { window.innerWidth > 600 ? 
            <Button showModal={showModal7} setShowModal={setShowModal7} text={'Know more'}></Button>
            : " " }
        </div>
        </div>    
       </div>
       <Details7 showModal7={showModal7} setShowModal7={setShowModal7} />

    {/* Experience--8 */}

    <div className='flex  justify-center mt-5 sm:mt-10'>
    <div className='grid grid-cols-2 bg-black w-[95%]  sm:w-[80%] rounded-xl  py-6 px-4 sm:px-10 shadow-xl
     bg-cover' data-aos="zoom-in" >
        <div className=' w-[60%]'>
         <p className='sm:font-Dancing pl-2  text-xs sm:text-lg bg-blue-200 rounded-md'>Company Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>Employment Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Client Name :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>Work Duration :</p>
         <p className='sm:font-Dancing mt-2 pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Designation :</p>
        </div>

        <div className=' w-[120%] -ml-8 sm:-ml-32 '>
            <p className='font-Poppins pl-2 text-xs sm:text-lg bg-blue-200 rounded-md'><span className='font-Poppins '>Pulse Communications System Pvt Ltd</span>, New Delhi India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>July,2012 to Jan,2016 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-blue-200 rounded-md'><span className='font-Poppins font'>Pulse Communications System Pvt Ltd ,</span> New Delhi India</p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-yellow-200 rounded-md'>July,2012 to March,2014 </p>
            <p className='font-Poppins pl-2 mt-2 text-xs sm:text-lg bg-blue-200 rounded-md'>Software Engineer</p>
            { window.innerWidth > 600 ?  
            <Button showModal={showModal8} setShowModal={setShowModal8} text={'Know more'}></Button>
            : " " }
        </div>
        </div>    
    </div>
    <Details8 showModal8={showModal8} setShowModal8={setShowModal8} />
    </>
  )
}

export default WorkExp