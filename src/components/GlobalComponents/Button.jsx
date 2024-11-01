import React from 'react'
import { HiMiniArrowLongDown } from "react-icons/hi2";

const Button = ({text,showModal,setShowModal}) => {
    //
    //bg-green-600
  return (
    <>
    <button onClick={()=>setShowModal(!showModal)} className = 'mt-6 flex items-center font-semibold px-4   h-[40px] rounded-[100px] text-white bg-[#77DD77] overflow-hidden 
      hover:-translate-y-2 hover:scale-110 transition-all delay-200 ease-in-out ' > {text}
        <span className="h-[35px] w-[35px] ml-4 text-black rounded-full bg-white text-center items-center 
        flex justify-center hover:duration-1000 bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-[#056BA7] hover:via-[#b0dffc] hover:to-[#30B0FA]    ">
            <HiMiniArrowLongDown />
          </span>
        </button>
    </>
  )
}

export default Button