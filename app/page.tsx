'use client';
import { motion } from 'framer-motion';
import BgSlideshow from './components/Home/BgSlideshow';
import HomeCards from './components/Home/HomeCards';

import { IoIosArrowDropright } from 'react-icons/io';

export default function Home() {
  return (
    <main>
      <BgSlideshow />
      <div className='min-h-screen flex gap-4 pt-4'>
        <motion.div
          style={{
            backgroundImage: `url(https://framerusercontent.com/images/ShqTo2F5a7sLxDmCPO2CSO76iQ.jpg?scale-down-to=1024)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            zIndex: -50,
          }}
          className='flex-1 h-[600px] flex flex-col cursor-pointer border-2 border-neutral-500'
        >
          <div className='px-4 flex justify-start items-start z-50 md:py-10'>
            <span className='text-2xl font-bold'>SHOP NOW</span>
            <IoIosArrowDropright />
          </div>
          <span className='text-8xl font-bold px-4'>NEW ARRIVALS</span>
        </motion.div>
        <div className='flex-1'>
          <HomeCards />
        </div>
      </div>
    </main>
  );
}
