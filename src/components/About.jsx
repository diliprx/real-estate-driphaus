import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
 
const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden bg-cover  transition-all mt-10' id='About' >
        <h2 className='text-2xl sm:text-4xl  font-bold  mb-2'>About <span className='text-gray-500'>Us</span></h2>
        <p className='mb-8 text-gray-700 max-w-80 text-center'>
            
        </p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.about} className="w-full sm:w-1/2 max-w-lg" />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-700'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28'>
                    <div ><p className='text-4xl font-medium text-gray-900'>10+</p><p>Years of Excellence</p></div>
                    <div ><p className='text-4xl font-medium text-gray-900'>12+</p><p>Projects Completed</p></div>
                    <div ><p className='text-4xl font-medium text-gray-900'>20+</p><p>Ongoing Projects</p></div>
                    <div ><p className='text-4xl font-medium text-gray-900'>300+</p><p>Trusted and Happy Customers</p></div>
                </div>
                <p className='my-10 max-w-lg'>
                    We are a leading real estate company dedicated to helping you find your dream home. With years of experience in the industry, we pride ourselves on our commitment to excellence and customer satisfaction. Our team of experts is here to guide you through every step of the buying or selling process, ensuring a smooth and successful transaction.
                </p>
                <button className='bg-blue-500 text-white px-6 py-2 rounded'>Learn more</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About