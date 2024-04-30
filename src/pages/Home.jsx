import React from 'react'
import mainImg from '/Images/w-laptop.png'
import { useNavigate } from 'react-router-dom'
import arrowImg from '/Images/arrow.png'
import About from './About';
import Skills from './Skills';
import WorkExp from './WorkExp';
import Roles from './Roles';


const Home = () => {

    const goToBtnAbout = ()=>{
        window.scrollTo({ top: 630, behavior : "smooth" })
    }
    const goToBtnAboutMb = ()=>{
        window.scrollTo({ top: 270, behavior : "smooth" })
    }
    
    const goToBtnProject = ()=>{
      window.scrollTo({ top: 2555, behavior : "smooth" })
     }
     const goToBtnProjectMb = ()=>{
      window.scrollTo({ top: 3390, behavior : "smooth" })
     }

  return (
    <>
     <div className='flex w-full '>
        <div className='w-[60%] flex justify-center mt-8  sm:mt-36'>
            <div>
            <p className='sm:text-xl font-semibold italic'>Hello</p>
            <p className='text-2xl sm:text-5xl font-bold sm:mt-2'>I'm  <span className='text-green-600'>Kulvendra</span></p>
            <p className='text-2xl sm:text-5xl text-green-600 font-bold'>Singh</p>
            <p className='sm:text-2xl font-semibold sm:mt-4'>Sr. Embedded Engineer</p>
            <div className='flex gap-5 mt-2 sm:mt-4'>
            {window.innerWidth > 600 ? (
                               <button className='px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-[1rem] rounded-2xl text-white  bg-red-400 hover:bg-green-600 hover:text-black transition-all ease-in duration-300 cursor-pointer'
                               onClick={goToBtnAbout}>About me</button>
                            ) : (
                              <button className='px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-[1rem] rounded-2xl text-white  bg-red-400 hover:bg-green-600 hover:text-black transition-all ease-in duration-300 cursor-pointer'
                              onClick={goToBtnAboutMb}>About me</button>
                            )}


            {window.innerWidth > 600 ? (
                              <button className='px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-[1rem] rounded-2xl text-white bg-green-600 hover:bg-red-400 hover:text-black transition-all ease-in duration-300 cursor-pointer'
                               onClick={goToBtnProject}>My Works</button>
                            ) : (
                              <button className='px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-[1rem] rounded-2xl text-white bg-green-600 hover:bg-red-400 hover:text-black transition-all ease-in duration-300 cursor-pointer'
                             onClick={goToBtnProjectMb}>My Works</button>
                            )}
            
            </div>
            
            </div>
            
        </div>
        
        <div className='w-[50%] mt-8 sm:mt-0  sm:w-[40%] '>
            <img src={mainImg} ></img>
        </div>
    </div>
    
     <div className='flex justify-center -mt-20 sm:-mt-60'>
    <img src={arrowImg} className='w-[50%] sm:w-[60%]  xl:w-[27%]' ></img>
    </div>
      

      <About />
      <Roles />
      <Skills />
      <WorkExp />
    </>
  )
}

export default Home