'use client';

import { BsArrowUpRight } from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function JournalDisplay() {
  const [hover, setHover] = useState(false);
  const [previewHover, setPreviewHover] = useState(false);
  return (
    <div className="min-h-[70vh] flex flex-col py-10">
      <div className="flex flex-col md:flex-row justify-between items-end mx-4">
        <div className="flex flex-col font-bold">
          <span className="font-bold tracking-tight text-5xl">
            FROM THE JOURNAL
          </span>
        </div>
        <div
          className="flex items-center font-bold text-xl gap-2 cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <motion.span
            animate={{ textDecoration: hover ? 'underline' : 'none' }}
            transition={{ duration: 0.3 }}
          >
            VIEW ALL
          </motion.span>
          <motion.div
            animate={{ y: hover ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <BsArrowUpRight />
          </motion.div>
        </div>
      </div>
      <div
        className="flex-1 border border-neutral-500 mx-1 mt-4 flex flex-col md:flex-row overflow-hidden cursor-pointer"
        onMouseEnter={() => setPreviewHover((prev) => !prev)}
        onMouseLeave={() => setPreviewHover((prev) => !prev)}
        onClick={() => (location.href = `/journal`)}
      >
        <div className="flex-1 overflow-hidden">
          <motion.div
            className=" h-full w-full min-h-[20vh] "
            style={{
              backgroundImage: `url(https://framerusercontent.com/images/k9X7BwFyjljCbl8q4mX6kp0nPI.jpg?scale-down-to=1024)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom',
            }}
            animate={{ scale: previewHover ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
        <div className="flex-1 bg-black flex items-center border-t md:border-t-0 md:border-l border-neutral-500 z-30">
          <div className="flex flex-col text-start m-2 md:ml-20">
            <span className="text-xs text-neutral-500 font-semibold">
              12/6/24
            </span>
            <span className="font-bold text-white text-4xl">
              THE EVOLUTION OF TECHNICAL <br /> WEAR
            </span>
            <p className="md:w-[50%] text-white font-semibold mt-4">
              The landscape of technical apparel has shifted dramatically. What
              began as purely functional design has transformed into something
              more considered - where performance meets architectural intention.
              This evolution mirrors our own journey in creating garments that
              serve both purpose and form.
            </p>
            <div className="flex items-center font-bold text-xl gap-2 mt-4">
              <motion.span
                animate={{
                  textDecoration: previewHover ? 'underline' : 'none',
                }}
                transition={{ duration: 0.3 }}
              >
                VIEW ALL
              </motion.span>
              <motion.div
                animate={{ y: previewHover ? -5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <BsArrowUpRight />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
