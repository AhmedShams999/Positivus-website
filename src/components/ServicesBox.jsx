import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";


function ServicesBox({title,seconedTitle,img,backGroundColor}) {


  return (
    <div className={`${backGroundColor} items-center flex h-[300px] rounded-3xl py-10 px-14 border border-black border-b-[5px]`}>
        <div className='flex flex-col h-full w-full justify-between'>
          <div>
            <h1 className={`text-2xl md:text-3xl px-1 w-fit tracking-wide ${ backGroundColor == "bg-light-gray"?'bg-primary':'bg-light_gray'}`}>{title}</h1>
            <h1 className={`text-2xl md:text-3xl w-fit px-1 ${ backGroundColor == "bg-light-gray"?'bg-primary':'bg-light_gray'}`}>{seconedTitle}</h1>

          </div>

          <img className='w-48 self-end md:hidden' src={img} alt="serviceImage" />
          <div className=' flex gap-5 items-end justify-between w-full md:justify-start md:items-center pb-1'>
            <BsArrowUpRightCircleFill className={`w-11 h-11 ${backGroundColor == "bg-secondry" && 'text-light_gray'}`}/>
            <p className={`text-xl hidden md:block ${backGroundColor == "bg-secondry" && 'text-light_gray'}`}>Learn more</p>
          </div>

        </div>
        <div className='w-[26rem] ml-auto hidden md:block'>
          <img className='w-full' src={img} alt="serviceImage" />

        </div>
    </div>
  )
}

export default ServicesBox

