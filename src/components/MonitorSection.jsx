import React from 'react';
import  monitorCardimg from '../assets/monitor-card.webp';
import { FaArrowRight } from "react-icons/fa";

const MonitorSection = () => {
  return (
     <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            {/*left section*/}
             <div className='md:w-1/2 w-full'>
                <p className='text-green-500 font-semibold'>Monitor</p>
               <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5'>Introducing best moblie carousels</h2>
             <p className='text-gray-600 mb-8'>Take control of your time and boost productivity with our intelligent scheduling system.
                Automate appointment,manage team availability and deliver exceptional customer experiences through seamless calander management.
             </p>
             <a href='#' className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                Explore scheduling features
                <FaArrowRight className='size-5' />
             </a>
             </div>
           
             {/*right section*/}
            
     <div className='md:w-1/2 w-full'>
                <img src={monitorCardimg} alt='schedule image' className='w-full h-auto'/> 
            </div>
          </div>
        </section>
  )
}

export default MonitorSection
