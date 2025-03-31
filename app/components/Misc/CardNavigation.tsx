'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

export default function CardNavigation(props: any) {
  const [previewHover, setPreviewHover] = useState(false);
  const carouselText = props.cardInfo.clothingType.toUpperCase() + ' '; // Ensure there's spacing

  return (
    <div
      className="relative min-h-[49vh] w-full border-2 border-neutral-500 cursor-pointer flex flex-col justify-between py-4 px-2 overflow-hidden"
      onClick={() =>
        (location.href = `/shop?category=${props.cardInfo.clothingType.toUpperCase()}`)
      }
      onMouseEnter={() => setPreviewHover(true)}
      onMouseLeave={() => setPreviewHover(false)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${props.cardInfo.previewPhoto})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        animate={{ scale: previewHover ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute top-0 left-0 w-full overflow-hidden text-gray-500 text-6xl font-bold opacity-50 pointer-events-none whitespace-nowrap">
        <motion.div
          className="inline-block"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        >
          {Array(10)
            .fill(carouselText)
            .map((word, index) => (
              <motion.span
                key={index}
                className="mx-8 ${}"
                animate={{ color: previewHover ? '#ffffff' : '#525252' }}
                transition={{ duration: 0.3 }}
              >
                {word}
              </motion.span>
            ))}
        </motion.div>
      </div>
      <div className="relative z-10 flex flex-col justify-end h-full">
        <div className="flex justify-between mx-4">
          <motion.div
            className="font-bold"
            animate={{ color: previewHover ? '#525252' : '#ffffff' }}
            transition={{ duration: 0.3 }}
          >
            {props.cardInfo.clothingType.toUpperCase()}
          </motion.div>
          <motion.div
            className="font-bold flex gap-2"
            initial={{ y: 0 }}
            animate={{ y: previewHover ? -3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>SHOP NOW</span>
            <motion.div
              animate={{ y: previewHover ? -3 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <BsArrowUpRight />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
