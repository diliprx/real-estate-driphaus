import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
motion;
const Testimonalis = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='text-gray-500'>Testimonials</span></h1>
        <p className='text-center text-gray-700 mb-12 max-w-80 mx-auto'>What our customers say about us</p>

        <div className='flex flex-wrap justify-center items-center gap-8'>
          {testimonialsData.map((testimonial,index)=>(
            <div key={index} className='max-w-[340px]  shadow-lg p-6 rounded bg-white text-center'>
              <img className='w-20 h-20 rounded-full mx-auto mb-4 ' src={testimonial.image} alt={testimonial.alt} />
              <h2 className='text-xl text-gray-800 font-medium'>{testimonial.name}</h2>
              <p className='text-gray-600 mb-4 text-sm '>{testimonial.title}</p>
              <div className='flex justify-center gap-1 text-red-500 mb-4 mt-2'>{Array.from({length: testimonial.rating},(item,index)=>(
                <img key={index} src={assets.star_icon} alt="" />
              ))}</div>
              <p className='text-gray-600'>{testimonial.text}</p>
            </div>
          ))}
        </div>
    </motion.div>

  )
}

export default Testimonalis