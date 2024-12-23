import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
<footer className="absolute bg-secondry pt-16 pb-10 px-10 left-0 right-0 mt-24 font-header">
  <div className="container mx-auto px-4 text-light_gray">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4 flex-[1]">
        <h4 className="text-3xl mb-2 font-bold fonat-semibold text-primary">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
      
        <div className="mt-4 lg:mb-0 mb-6">
          <div className='flex gap-4'>
            <a href="" target="_blank"><div className='w-10 h-10 bg-light_gray flex justify-center items-center rounded-full'><FaTwitter className='text-secondry text-2xl'/></div></a>
            <a href="" target="_blank"><div className='w-10 h-10 bg-light_gray flex justify-center items-center rounded-full'><FaFacebookF className='text-secondry text-2xl'/></div></a>
            <a href="" target="_blank"><div className='w-10 h-10 bg-light_gray flex justify-center items-center rounded-full'><FaBehance className='text-secondry text-2xl'/></div></a>
            <a href="" target="_blank"><div className='w-10 h-10 bg-light_gray flex justify-center items-center rounded-full'><FaGithub className='text-secondry text-2xl'/></div></a>
          </div>
            {/* <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              
              <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-github"></i>
            </button> */}
        </div>
         

      </div>
      <div className="w-full lg:w-6/12 px-4 flex-[1]" >
        <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-primary text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#Services">Services</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#caseStudies">Case Studies</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#workingProcess">Working Process</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#team">Team</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-primary text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">MIT License</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
        </div>
      </div>
      
    </div>
    <hr className="my-6 border-blueGray-300" />
    <div className="flex flex-wrap items-center md:justify-between justify-center text-primary">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2021</span><a href="#" className="text-blueGray-500"> Rise™ by </a>
          <a href="https://github.com/AhmedShams999" className="text-blueGray-500 hover:text-light_gray" target="_blank">Ahmed Shmas</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
