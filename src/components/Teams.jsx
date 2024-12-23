import React, { useId } from 'react'
import { FaLinkedinIn } from "react-icons/fa";

function Teams() {
  const data = [
    {
      id: useId(),
      name: 'John Smith',
      role: 'CEO and Founder',
      info: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      img: './images/person1.png',
    },
    {
      id: useId(),
      name: 'Jane Doe',
      role: 'Director of Operations',
      info: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      img: './images/person2.png',
    },
    {
      id: useId(),
      name: 'Michael Brown',
      role: 'Senior SEO Specialist',
      info: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      img: './images/person3.png',
    },
    {
      id: useId(),
      name: 'Emily Johnson',
      role: 'PPC Manager',
      info: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
      img: './images/person4.png',
    },
    {
      id: useId(),
      name: 'Brian Williams',
      role: 'Social Media Specialist',
      info: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
      img: './images/person5.png',
    },
    {
      id: useId(),
      name: 'Sarah Kim',
      role: 'Content Creator',
      info: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
      img: './images/person6.png',
    },
  ]
  return (
    <div id='team' className='font-header'>
       <div className='flex flex-col items-center md:flex-row md:justify-start gap-6'>
          <h1 className='text-3xl font-semibold bg-primary px-1'>Team</h1>
          <p className='max-w-[32rem] text-center md:text-start'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-4 mt-24 md:grid-cols-2 lg:grid-cols-3'>
            {data.map(el=> {
              return (
                <div key={el.id} className='border border-black rounded-3xl box-border h-96 border-b-[6px] py-10 px-6 flex flex-col gap-4'>
                    <div className='flex justify-between'> 
                      <div className='flex items-end gap-4'>
                        <img src={el.img} alt="person" />
                        <div>
                          <h1 className='text-2xl font-bold'>{el.name}</h1>
                          <h3 className='text-xl'>{el.role}</h3>

                        </div>
                      </div>
                      <div className='min-w-8 h-8 bg-black rounded-full flex justify-center items-center'>
                        <FaLinkedinIn className='text-primary'/>
                      </div>
                    </div>
                    <hr className='border-black'/>
                
                    <p>{el.info}</p>

                    
                </div>

              )
            })}
          </div>
          <button className='bg-secondry w-full h-16 rounded-lg text-light_gray md:w-52 md:h-14 self-end'>See all team</button>

        </div>
    </div>
  )
}

export default Teams
