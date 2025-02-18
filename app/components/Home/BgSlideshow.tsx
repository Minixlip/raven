'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import slideshow1 from '../../assets/homeImages/slideshow1.png';
import slideshow2 from '../../assets/homeImages/slideshow2.png';
import slideshow3 from '../../assets/homeImages/slideshow3.png';
import Link from 'next/link';

export default function BgSlideshow() {
  const slideshowImages = [
    {
      image: slideshow1,
      buttonText: 'OUTERWEAR',
      imageTitle: 'BETWEEN SEASONS',
      imageDescription:
        'LAYER UP FOR CHANGING WEATHER WITH VERSATILE PIECES DESIGNED FOR ADAPTABILITY. PREMIUM MATERIALS MEET CONSIDERED DESIGN',
    },
    {
      image: slideshow2,
      buttonText: 'SHOP NOW',
      imageTitle: 'CURATED GIFTS',
      imageDescription:
        'FIND THE PERFECT PRESENT WITH OUR CURATED SELECTION OF PREMIUM PIECES. TIMELESS DESIGNS FOR THOSE WHO APPRECIATE QUALITY.',
    },
    {
      image: slideshow3,
      buttonText: 'SHOP NOW',
      imageTitle: 'JUST DROPPED',
      imageDescription: 'LIMITED EDITION RELEASE, AVAILABLE NOW.',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % slideshowImages.length
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[95vh]">
      <motion.div
        key={currentImageIndex}
        initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{
          backgroundImage: `url(${slideshowImages[currentImageIndex].image.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <div className="relative z-10 min-h-[95vh] flex justify-start items-end">
        <div className="flex justify-between flex-1 mx-8 mb-12">
          <div className="flex flex-col gap-4 text-wrap flex-shrink">
            <Link
              href="/"
              className="bg-black w-fit p-4 border border-neutral-500 font-bold text-2xl xl:text-4xl"
            >
              {slideshowImages[currentImageIndex].buttonText}
            </Link>
            <span className="font-extrabold  text-2xl xl:text-4xl select-none">
              {slideshowImages[currentImageIndex].imageTitle}
            </span>
            <p className="font-semibold text-white text-2xl xl:text-4xl w-[60%] xl:w-[80%] select-none">
              {slideshowImages[currentImageIndex].imageDescription}
            </p>
          </div>
          <div className="flex flex-col xl:mr-10 flex-wrap">
            {slideshowImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ filter: 'grayscale(100%)' }}
                animate={{
                  filter:
                    index === currentImageIndex
                      ? 'grayscale(0%)'
                      : 'grayscale(100%)',
                }}
                transition={{ duration: 4, ease: 'easeInOut' }}
              >
                <Image
                  alt=""
                  src={image.image}
                  width={200}
                  className="border border-neutral-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
