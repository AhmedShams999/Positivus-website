import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function CaseStudy() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id='caseStudies' className='font-header'>
        <div className='flex flex-col items-center md:flex-row md:justify-start gap-6'>
          <h1 className='text-3xl font-semibold bg-primary px-1'>Case Studies</h1>
          <p className='max-w-[32rem] text-center md:text-start'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
        </div>
        <div className='py-24 hidden md:block'>
          <div className='bg-secondry relative h-[25rem] rounded-3xl flex md:w-full box-border py-16'>

              <div className='flex-1 flex flex-col justify-between items-start px-10 md:px-16 text-white'>
                  <p className='max-w-[28rem]'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                  <div className='flex items-center gap-2 text-primary'>
                    <p className='text-xl'>Learn more</p>
                    <RxArrowTopRight className='text-2xl'/>
                  </div>
              </div>

              <div className=''>
                <div className='h-full w-[1px] bg-light_gray self-center'></div>
              </div>

              <div className='flex-1 flex flex-col justify-between items-start px-10 md:px-16 text-white'>
                  <p className='max-w-[28rem]'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                  <div className='flex items-center gap-2 text-primary'>
                    <p className='text-xl'>Learn more</p>
                    <RxArrowTopRight className='text-2xl'/>
                  </div>
              </div>

              <div className=''>
                <div className='h-full w-[1px] bg-light_gray self-center'></div>
              </div>

              <div className='flex-1 flex flex-col justify-between items-start px-10 md:px-16 text-white'>
                  <p className='max-w-[28rem]'>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                  <div className='flex items-center gap-2 text-primary'>
                    <p className='text-xl'>Learn more</p>
                    <RxArrowTopRight className='text-2xl'/>
                  </div>
              </div>


              
              {/* <div className='flex-1'>
              </div> */}
          </div>
          
        </div>
        <div className='py-24 md:hidden'>
          
          <Carousel
                  responsive={responsive}
                  infinite={true}
                  keyBoardControl={true}
                  // showDots={true}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
          >
              <div className='bg-secondry min-h-80 rounded-[3rem] box-border py-14 md:py-16 flex flex-col justify-between items-start px-10 md:px-16 text-white'>
                  <p className='max-w-[28rem] text-md md:text-xl'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                  <div className='flex items-center gap-2 text-primary'>
                    <p className='text-xl'>Learn more</p>
                    <RxArrowTopRight className='text-2xl'/>
                  </div>
              </div>

          

              <div className='bg-secondry min-h-80 rounded-[3rem] box-border py-14 md:py-16 flex flex-col justify-between items-start px-10 md:px-16 text-white'>
                  <p className='max-w-[28rem] text-md md:text-xl'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                  <div className='flex items-center gap-2 text-primary'>
                    <p className='text-xl'>Learn more</p>
                    <RxArrowTopRight className='text-2xl'/>
                  </div>
              </div>

         

              <div className='bg-secondry min-h-80 rounded-[3rem] box-border py-14 md:py-16 flex flex-col justify-between items-start px-10 md:px-16 text-white'>
                  <p className='max-w-[28rem] text-md md:text-xl'>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                  <div className='flex items-center gap-2 text-primary'>
                    <p className='text-xl'>Learn more</p>
                    <RxArrowTopRight className='text-2xl'/>
                  </div>
              </div>
    

          </Carousel>
        </div>
    </div>
  )
}

export default CaseStudy
