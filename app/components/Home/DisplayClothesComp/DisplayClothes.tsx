'use client';

import { FaCircle } from 'react-icons/fa6';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DisplayClothes() {
  const [leftPreview, setLeftPreview] = useState(false);
  const [rightPreview, setRightPreview] = useState(false);

  const [leftSmallPreview, setLeftSmallPreview] = useState(false);
  const [rightSmallPreview, setRightSmallPreview] = useState(false);

  return (
    <div className="min-h-[50vh] flex flex-col md:flex-row gap-2 my-4">
      <div
        style={{
          backgroundImage: `url(https://framerusercontent.com/images/QnjPU1zOWtNjPZtBPpgHzKv8E.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="h-[49vh] w-full border-2 border-neutral-500 flex justify-center items-center"
      >
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setLeftPreview(true)}
          onMouseLeave={() => setLeftPreview(false)}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
          >
            <FaCircle className="text-white" />
          </motion.div>

          {leftPreview && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={() => (location.href = '/about')}
              onMouseEnter={() => setLeftSmallPreview((prev) => !prev)}
              onMouseLeave={() => setLeftSmallPreview((prev) => !prev)}
              className="absolute mt-4 border-2 border-neutral-500 bg-black p-4 w-[200px] cursor-pointer"
            >
              <div
                style={{
                  backgroundImage: leftSmallPreview
                    ? `url(https://framerusercontent.com/images/xfdYoICn1jlVy8Jo8Kmfx4AKcQ.jpg)`
                    : `url(https://framerusercontent.com/images/i2nUXULTniLDEzEgzGtg6Q0F5Y.jpg)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                className="h-[100px] w-full border-b border-neutral-500 "
              />
              <div className="flex flex-col justify-between p-2">
                <span className="text-sm text-neutral-600 font-bold">
                  OUTERWEAR
                </span>
                <span className="text-sm font-bold">
                  ELEMENTS WEATHER JACKET
                </span>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-sm font-bold">$185</span>
                  <FaCircleArrowRight />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(https://framerusercontent.com/images/yiwGqGFXVOLSppnPlJ7n37p2ezI.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="h-[49vh] w-full border-2 border-neutral-500 flex justify-center items-center"
      >
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setRightPreview(true)}
          onMouseLeave={() => setRightPreview(false)}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
          >
            <FaCircle className="text-white" />
          </motion.div>

          {rightPreview && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={() => (location.href = '/about')}
              onMouseEnter={() => setRightSmallPreview((prev) => !prev)}
              onMouseLeave={() => setRightSmallPreview((prev) => !prev)}
              className="absolute mt-4 border-2 border-neutral-500 bg-black p-4 w-[200px] cursor-pointer"
            >
              <div
                style={{
                  backgroundImage: rightSmallPreview
                    ? `url(https://framerusercontent.com/images/ixAEJVtgycAmvKdgNNXOKZa3Y0.jpg)`
                    : `url(https://framerusercontent.com/images/P5z58RDJ0pbV2D7WkFImxVgs.jpg)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                className="h-[100px] w-full border-b border-neutral-500 "
              />
              <div className="flex flex-col justify-between p-2">
                <span className="text-sm text-neutral-600 font-bold">
                  OUTERWEAR
                </span>
                <span className="text-sm font-bold">
                  ELEMENTS WEATHER JACKET
                </span>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-sm font-bold">$185</span>
                  <FaCircleArrowRight />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
