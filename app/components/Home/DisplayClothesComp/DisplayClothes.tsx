'use client';

import { FaCircle } from 'react-icons/fa6';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DisplayClothes() {
  const [leftPreview, setLeftPreview] = useState(false);
  const [rightPreview, setRightPreview] = useState(false);
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-2 my-2 ">
      <div
        style={{
          backgroundImage: `url(https://framerusercontent.com/images/QnjPU1zOWtNjPZtBPpgHzKv8E.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="h-[50vh] min-w-[50vw] border-2 border-neutral-500"
      >
        <div className="flex flex-col h-full w-full justify-center items-center">
          <FaCircle
            className=" cursor-pointer hover:bg-white"
            onMouseEnter={() => setLeftPreview((prev) => !prev)}
            onMouseLeave={() => setLeftPreview((prev) => !prev)}
          />
          <div className="flex border-2 border-neutral-500 mt-4">
            <div
              style={{
                backgroundImage: `url(https://framerusercontent.com/images/yiwGqGFXVOLSppnPlJ7n37p2ezI.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              className="h-[100px] w-[100px] border-r border-neutral-500"
            />
            <div className="flex flex-col justify-between p-2 bg-black">
              <span>BOTTOMS</span>
              <span>Motion Performance pants</span>
              <div className="flex justify-between items-center">
                <span>$185</span>
                <FaCircleArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(https://framerusercontent.com/images/yiwGqGFXVOLSppnPlJ7n37p2ezI.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="h-[50vh] min-w-[50vw] border-2 border-neutral-500"
      >
        Right side
      </div>
    </div>
  );
}
