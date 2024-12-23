import React, { useId } from 'react'
import ServicesBox from './ServicesBox'

function Services() {
  const serviceBoxData = [
    {
      id: useId(),
      title: "Search engine",
      title2: "optimization",
      img: './images/image-one.png',
      color: 'bg-light-gray',
    },
    {
      id: useId(),
      title: "Pay-per-click",
      title2: "advertising",
      img: './images/image-two.png',
      color: 'bg-primary',
    },
    {
      id: useId(),
      title: "Social Media",
      title2: "Marketing",
      img: './images/image-three.png',
      color: 'bg-secondry',
    },
    {
      id: useId(),
      title: "Email",
      title2: "Marketing",
      img: './images/image-four.png',
      color: 'bg-light-gray',
    },
    {
      id: useId(),
      title: "Content",
      title2: "Creation",
      img: './images/image-five.png',
      color: 'bg-primary',
    },
    {
      id: useId(),
      title: "Analytics and",
      title2: "Tracking",
      img: './images/image-six.png',
      color: 'bg-secondry',
    }
  ]
  return (
    <div id='Services' className='mt-24 font-header'>
        <div className='flex flex-col items-center md:flex-row md:justify-start gap-6'>
            <h1 className='text-3xl font-semibold bg-primary px-1'>Services</h1>
            <p className='max-w-[32rem] text-center md:text-start'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>

        <div className='grid grid-cols-1 gap-x-8 gap-y-4 mt-24 md:grid-cols-2'>
            {serviceBoxData.map(el=><ServicesBox key={el.id} backGroundColor={el.color} title={el.title} seconedTitle={el.title2} img={el.img}/>)}
      
        </div>
    </div>
  )
}

export default Services
