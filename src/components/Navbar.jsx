import React,{ useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {RxCross2} from "react-icons/rx";

const Navbar = () => {

    const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
    function toggleMenu() {
        setIsMainMenuOpen(!isMainMenuOpen);
       }

    const goToBtnHome = ()=>{
        window.scrollTo({ top: 0, behavior : "smooth" })
    }   
    const goToBtnAbout = ()=>{
        window.scrollTo({ top: 630, behavior : "smooth" })
    }
    const goToBtnAboutMb = ()=>{
        window.scrollTo({ top: 270, behavior : "smooth" })
    }

   const goToBtnServices = ()=>{
    window.scrollTo({ top: 1620, behavior : "smooth" })
   }
   const goToBtnServicesMb = ()=>{
    window.scrollTo({ top: 2420, behavior : "smooth" })
   }


   const goToBtnSkills = ()=>{
    window.scrollTo({ top: 1930, behavior : "smooth" })
   }
   const goToBtnSkillsMb = ()=>{
    window.scrollTo({ top: 2265, behavior : "smooth" })
   }


   const goToBtnProject = ()=>{
    window.scrollTo({ top: 2605, behavior : "smooth" })
   }
   const goToBtnProjectMb = ()=>{
    window.scrollTo({ top: 2930, behavior : "smooth" })
   }

   const goToBtnContact = ()=>{
    window.scrollTo({ top: 4860, behavior : "smooth" })
   }

   const goToBtnContactMb = ()=>{
    window.scrollTo({ top: 4850, behavior : "smooth" })
   }


  return (
    <>
     <div className='sticky top-0 w-full h-20 bg-[#496989] flex justify-between items-center'>
        {/* <img src={''} className='md:h-19 sm:h-16 h-12 sm:ml-20 ml-5 cursor-pointer' ></img> */}
        <p className='ml-5 sm:ml-10 font-semibold text-[1.25rem] sm:text-[2rem] text-white hover:text-orange-400 cursor-pointer transition-all ease-in duration-200' onClick={goToBtnHome}>KPortfolio</p>

     <nav>
     <span className='text-3xl max-[400px]:text-2xl sm:hidden block cursor-pointer ml-20 mr-4 mt-40' onClick={toggleMenu}>
        {isMainMenuOpen ? <RxCross2 /> : <AiOutlineMenu />}
        </span>

     <ul className={` md:flex md:items-center md:justify-between relative  md:mr-6  z-50  md:static md:mt-0 bg-[#496989] sm:mt-96  md:h-20 h-auto md:w-auto 
                    left-0 md:py-0 py-4 md:pl-0 sm:opacity-100 ${isMainMenuOpen ? 'opacity-100' : 'opacity-0'}  `}>

        <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white cursor-pointer sm:text-xl text-xs hover:text-orange-400 transition-all ease-in duration-100'>
            {/* <Link to='/about'>About</Link>  */}
            {/* <p onClick={goToBtnAbout}>About</p> */}
            {window.innerWidth > 600 ? (
                                <p onClick={goToBtnAbout}>About</p>
                            ) : (
                                <button onClick={()=>{goToBtnAboutMb(),toggleMenu()}}>About</button>
                            )}
        </li>
       
        {/* <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white cursor-pointer sm:text-xl text-xs hover:text-orange-500 transition-all ease-in duration-100'>
           
            {window.innerWidth > 600 ? (
                                <p onClick={goToBtnServices}>Services</p>
                            ) : (
                                <button onClick={()=>{goToBtnServicesMb(),toggleMenu()}}>Services</button>
                            )}
        </li> */}

        <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white cursor-pointer sm:text-xl text-xs hover:text-green-500 transition-all ease-in duration-100'>
            {/* <Link to='/skills' >Skills</Link>  */}
            {/* <p onClick={goToBtnSkills}>Skills</p> */}
            {window.innerWidth > 600 ? (
                                <p onClick={goToBtnSkills}>Skills</p>
                            ) : (
                                <button onClick={()=>{goToBtnSkillsMb(),toggleMenu()}}>Skills</button>
                            )}
        </li>

        <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white cursor-pointer sm:text-xl text-xs hover:text-orange-400 transition-all ease-in duration-100'>
            {/* <Link to='/project' >Project</Link>  */}
            {/* <p onClick={goToBtnProject}>Project</p> */}
            {window.innerWidth > 600 ? (
                                <p onClick={goToBtnProject}>Work</p>
                            ) : (
                                <button onClick={()=>{goToBtnProjectMb(),toggleMenu()}}>Work</button>
                            )}
        </li>

        <li className='flex items-center md:mx-2 md:py-8 py-2 px-2 font-Syne text-white cursor-pointer sm:text-xl text-xs hover:text-green-500 transition-all ease-in duration-100'>
            {/* <Link to='/contact' >Contact</Link>  */}
            {/* <p onClick={()=>{goToBtnContact(),toggleMenu()}}>Contact</p> */}
            {window.innerWidth > 600 ? (
                                <p onClick={goToBtnContact}>Contact</p>
                            ) : (
                                <button onClick={()=>{goToBtnContactMb(),toggleMenu()}}>Contact</button>
                            )}
        </li>

        </ul>
     </nav>

    </div>
    </>
  )
}

export default Navbar