import React from 'react'

function FreeProposal() {
  return (
    <div className='py-24 font-header'>
      <div className='bg-light_gray relative h-[25rem] rounded-3xl flex md:w-full'>
          <div className='flex-1 flex flex-col gap-6 justify-center items-start md:items-center lg:items-start px-10 md:px-16'>
              <h4 className='text-2xl font-bold'>Let’s make things happen</h4>
              <p className='max-w-[28rem] text-start md:text-center lg:text-start'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
              <button className='bg-secondry w-full h-16 rounded-lg text-light_gray md:w-52 md:h-14'>Get your free proposal</button>
          </div>
          <div className='absolute lg:w-[25rem] md:w-5 top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block' >
            <img 
              className='w-full' 
              src="./images/proposel-image.png" 
              alt="" 
            />

          </div>


          
          {/* <div className='flex-1'>
          </div> */}
      </div>
    </div>
  )
}

export default FreeProposal
