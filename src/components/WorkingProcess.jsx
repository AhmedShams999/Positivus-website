import React, { useId, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function WorkingProcess() {
  const [data, setData] = useState([
    {
      id: useId(),
      num: '01',
      title: 'Consultation',
      info: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      show: false,
    },
    {
      id: useId(),
      num: '02',
      title: 'Research and Strategy Development',
      info: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      show: false,
    },
    {
      id: useId(),
      num: '03',
      title: 'Implementation',
      info: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      show: false,
    },
    {
      id: useId(),
      num: '04',
      title: 'Monitoring and Optimization',
      info: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      show: false,
    },
    {
      id: useId(),
      num: '05',
      title: 'Reporting and Communication',
      info: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      show: false,
    },
    {
      id: useId(),
      num: '06',
      title: 'Continual Improvement',
      info: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      show: false,
    },
  ])


  const showInfo = (id)=>{
      setData(data.map(el=>{
        return el.id === id ? {
          'info':el.info,
          'num': el.num,
          'show': !el.show,
          'id': el.id,
          'title': el.title
        } : el 
         
      }))

    }
    

  return (
    <div id='workingProcess' className='font-header'>
         <div className='flex flex-col items-center md:flex-row md:justify-start gap-6'>
            <h1 className='text-3xl font-semibold bg-primary px-1'>Our Working Process </h1>
            <p className='max-w-64 text-center md:text-start'>Step-by-Step Guide to Achieving Your Business Goals</p>
         </div>

         <div className='flex flex-col py-24 gap-5'>
  
            {data.map(el=>{
              return(
                  <div key={el.id} className={`${el.show == false ? 'bg-light_gray ' : 'bg-primary '} w-full min-h-28 flex flex-col gap-6 ${el.show?'py-6':'py-2'} md:py-10 px-6 md:px-10 box-border ${el.show? 'rounded-3xl':'rounded-full'} border-b-[6px] border border-black md:rounded-3xl`}>
                    <div className={`flex items-center gap-5 ${el.show? 'pt-0' : 'pt-6 md:pt-0'}`}>
                      <h1 className='text-2xl md:text-6xl font-bold'>{el.num}</h1>
                      <h3 className='text-md'>{el.title}</h3>
      
                      <div onClick={()=>showInfo(el.id)} className='min-w-7 h-7 md:w-12 md:h-12 cursor-pointer border border-black text-3xl rounded-full flex justify-center items-center ml-auto'>

                         {el.show? <FaMinus className='w-5 md:w-full' /> : <FaPlus className='w-5 md:w-full'/>}
                      </div>
                    </div>
                    <div className={`${el.show? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-6`}>
                      <hr className={` border-black`}/>
        
                      <p>{el.info}</p>
        

                    </div>
                  </div>
              )
            })}
         </div>
    </div>
  )
}

export default WorkingProcess
