import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-800 overflow-hidden" id="Footer">
        <div className='flex flex-col container mx-auto md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0  '> <img src={assets.lg} alt="" className='h-20' /> 
            
            <p className='text-gray-300 mt-4'> Turning spaces into happy places!  </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4 '>Company</h3>
                <ul className='text-gray-500 text-sm flex flex-col gap-2'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                   <a href="#About" className='hover:text-white'>About</a>
                     <a href="#Contact" className='hover:text-white'>Contact</a>
                      <a href="#Privacy" className='hover:text-white'>Privacy Policy</a>

                </ul>
            </div>
            <div className='w-full md:w-[300px]'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The lates news, articles and resource, sent to your inbox weekly</p>
            <div className='flex gap-2 mb-3' >
                <input type="email" name="email" placeholder='Enter your email' id=""  className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-600 focus:outline-none w-full md:w-auto '/>
                <button className='py-2 px-4 rounded bg-gray-600 text-white'>Subscribe</button>
            </div>

            </div>
        

        </div>
        <div className='border-t border-black text-center  text-white flex flex-col items-center py-4'>
           <p className='flex justify-center items-center'>&copy; {new Date().getFullYear()} DR!PHAUS. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer