'use client';

import { BsArrowUpRight } from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DisplayCollections() {
  const [leftPreviewHover, setLeftPreviewHover] = useState(false);
  const [rightPreviewHover, setRightPreviewHover] = useState(false);

  return (
    <div className="min-h-[90vh] flex flex-col lg:flex-row md:gap-2 py-2">
      <div
        className="flex-1 border border-neutral-500 flex flex-col justify-end font-bold cursor-pointer"
        style={{
          backgroundImage: `url(https://framerusercontent.com/images/Bqu1YbtLNP6KpNMpw9Wnp1oQOJA.jpg?scale-down-to=1024)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
        }}
        onMouseEnter={() => setLeftPreviewHover(true)}
        onMouseLeave={() => setLeftPreviewHover(false)}
        onClick={() => (location.href = `/journal`)}
      >
        <div className="mx-2 my-2 text-3xl flex gap-2 items-center font-semibold">
          <motion.span
            animate={{
              textDecoration: leftPreviewHover ? 'underline' : 'none',
            }}
            transition={{ duration: 0.3 }}
          >
            SHOP NOW
          </motion.span>
          <motion.div
            animate={{ y: leftPreviewHover ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <BsArrowUpRight />
          </motion.div>
        </div>
        <span className="mx-2 mb-10 text-3xl md:text-6xl tracking-wider">
          EXPLORE
          <br /> OUR <br /> COLLECTIONS
        </span>
      </div>
      <div
        className="flex-1 border border-neutral-500 flex flex-col justify-end font-bold cursor-pointer"
        style={{
          backgroundImage: `url(https://framerusercontent.com/images/aHmupIkpNbiTWcrio0jHVxTg4OU.png?scale-down-to=1024)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
        }}
        onMouseEnter={() => setRightPreviewHover(true)}
        onMouseLeave={() => setRightPreviewHover(false)}
        onClick={() => (location.href = `/about`)}
      >
        <div className="mx-2 my-2 text-3xl flex gap-2 items-center font-semibold">
          <motion.span
            animate={{
              textDecoration: rightPreviewHover ? 'underline' : 'none',
            }}
            transition={{ duration: 0.3 }}
          >
            ABOUT US
          </motion.span>
          <motion.div
            animate={{ y: rightPreviewHover ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <BsArrowUpRight />
          </motion.div>
        </div>
        <span className="mx-2 mb-10  text-3xl md:text-6xl tracking-wider">
          BUILT
          <br /> FOR REAL <br /> PERFORMANCE
        </span>
      </div>
    </div>
  );
}
