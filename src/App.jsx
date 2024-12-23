import { useState,useId } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from "react-fast-marquee";
import Services from './components/Services'
import FreeProposal from './components/FreeProposal'
import CaseStudy from './components/CaseStudy'
import WorkingProcess from './components/WorkingProcess'
import Teams from './components/Teams'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const companyImges = [
    {
      id: useId(),
      src: './icons/Company-logoNC.png',
      link: '',
    },
    {
      id: useId(),
      src: './icons/Company-logo1NC.png',
      link: '',
    },
    {
      id: useId(),
      src: './icons/Company-logo2NC.png',
      link: '',
    },
    {
      id: useId(),
      src: './icons/Company-logo3NC.png',
      link: '',
    },
    {
      id: useId(),
      src: './icons/Company-logo4NC.png',
      link: '',
    },
    {
      id: useId(),
      src: './icons/Company-logo5NC.png',
      link: '',
    },
    {
      id: useId(),
      src: './icons/Company-logoNC.png',
      link: '',
    },
    {
      id: useId(),
      src: './icons/Company-logo1NC.png',
      link: '',
    },
  ]

  return (
    <>
      <Header />
      <Hero />

      <Marquee gradient={true} pauseOnHover={true} className='mt-5' > 
          {companyImges.map(el=>{
            return <img key={el.id} src={el.src} alt="companyImage" className='mx-10'/>
          })}
      </Marquee>
      
      <div className='block md:hidden'>
        <Marquee gradient={true} pauseOnHover={true} className='mt-5' direction='right'> 
          {companyImges.map(el=>{
            return <img key={el.id} src={el.src} alt="companyImage" className='mx-10'/>
          })}
        </Marquee>
      </div>
      <Services />

      <FreeProposal />
      
      <CaseStudy />

      <WorkingProcess />

      <Teams />

      <Footer />
    </>
  )
}

export default App
