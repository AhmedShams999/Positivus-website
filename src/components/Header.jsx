import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [drobdown, setDrobdown] = useState(false)

  const toggleDropdown = () => {
    setDrobdown(!drobdown);
  };

  return (
    <header className='flex justify-between items-center font-header'>
      {/* Desktop */}
       <div className='flex justify-between items-center w-full'>
          <img src="./icons/Logo.png" alt="logo" className='w-40'/>
        
          <div className='hidden md:flex gap-8 ml-auto'>
            <a href="#">
              <div className="relative group cursor-pointer">
                <h6>About us</h6>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondry transition-all group-hover:w-full"></span>
              </div>
            </a>

            <a href="#Services">
              <div className="relative group cursor-pointer">
                <h6>Services</h6>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondry transition-all group-hover:w-full"></span>
              </div>
            </a>

            <a href="#">
              <div className="relative group cursor-pointer">
                <h6>Use Cases</h6>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondry transition-all group-hover:w-full"></span>
              </div>
            </a>

            <a href="#">
              <div className="relative group cursor-pointer">
                <h6>Pricing</h6>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondry transition-all group-hover:w-full"></span>
              </div>
            </a>

            <a href="#">
              <div className="relative group cursor-pointer">
                <h6>Blog</h6>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondry transition-all group-hover:w-full"></span>
              </div>

            </a>

          </div>
          <div className='hidden md:block ml-10 border border-black py-4 px-10 rounded-2xl text-center cursor-pointer hover:bg-secondry hover:text-light_gray transition-all '>
            <h6>Request a quote</h6>
            
          </div>

       </div>
      {/* mobile */}
      <div className='md:hidden relative'>

        <RxHamburgerMenu className='w-6 h-6 cursor-pointer' onClick={toggleDropdown}/>
        {drobdown && (
        <div
          id="dropdown"
          className="absolute right-0 z-10 mt-2 bg-white border border-black rounded-lg w-56"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li >
              <a href="#" className="text-black flex items-center px-4 py-2 hover:bg-primary hover:h-10 hover:rounded-b-lg hover:border-b-4 border-black transition-colors duration-300 ease-in-out">
                About us
              </a>
            </li>
            <li >
              <a href="#Services" className="text-black flex items-center px-4 py-2 hover:bg-primary hover:h-10 hover:rounded-b-lg hover:border-b-4 border-black transition-colors duration-300 ease-in-out">
                Services
              </a>
            </li>
            <li >
              <a href="#" className="text-black flex items-center px-4 py-2 hover:bg-primary hover:h-10 hover:rounded-b-lg hover:border-b-4 border-black transition-colors duration-300 ease-in-out">
                Use Cases
              </a>
            </li>
            <li >
              <a href="#" className="text-black flex items-center px-4 py-2 hover:bg-primary hover:h-10 hover:rounded-b-lg hover:border-b-4 border-black transition-colors duration-300 ease-in-out">
                Pricing
              </a>
            </li>
            <li >
              <a href="#" className="text-black flex items-center px-4 py-2 hover:bg-primary hover:h-10 hover:rounded-b-lg hover:border-b-4 border-black transition-colors duration-300 ease-in-out">
                Blog
              </a>
            </li>
     
          </ul>
        </div>
      )}
      </div>
    </header>
  )
}

export default Header
