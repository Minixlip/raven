'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import HomeCards from './HomeCards';
import { IoIosArrowDropright } from 'react-icons/io';
import Link from 'next/link';

export default function HomeCardSection2() {
  const parentRef = useRef<HTMLDivElement>(null);
  const chickenRef = useRef<HTMLDivElement>(null);
  const [maxTranslateY, setMaxTranslateY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width & update `isMobile`
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768); // Tailwind `md`
    checkScreenSize(); // Check on mount
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Track scroll progress within `parentRef`
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const updateTranslateY = () => {
      if (parentRef.current && chickenRef.current) {
        const parentHeight = parentRef.current.clientHeight;
        const chickenHeight = chickenRef.current.clientHeight;
        setMaxTranslateY(parentHeight - chickenHeight);
      }
    };

    updateTranslateY();
    window.addEventListener('resize', updateTranslateY);
    return () => window.removeEventListener('resize', updateTranslateY);
  }, []);

  // Move `.chicken` only when NOT in mobile view
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 0 : maxTranslateY]
  );

  // Smooth motion
  const smoothTranslateY = useSpring(translateY, {
    stiffness: 100,
    damping: 15,
  });

  const [cardClothes, setCardClothes] = useState([
    {
      New: true,
      Sale: false,
      BestSeller: false,
      image:
        'https://framerusercontent.com/images/JLuOpABriYGXchTXxdkShIj4.jpg',
      secondImage:
        'https://framerusercontent.com/images/CCsJVhIWqk5Kd4IoA0guLflP7hg.jpg',
      TypeOfClothing: 'TOPS',
      NameOfClothing: 'ESSENTIAL TEE',
      Price: 145,
    },
    {
      New: true,
      Sale: false,
      BestSeller: false,
      image:
        'https://framerusercontent.com/images/eVYdtpXA14mNqOPaTCQwQHElY.jpg',
      secondImage:
        'https://framerusercontent.com/images/BaJUG2L7Z49UUdlS9eGXKsmXM1Q.jpg',
      TypeOfClothing: 'OUTERWEAR',
      NameOfClothing: 'MOTION TRACK JACKET',
      Price: 165,
    },
    {
      New: true,
      Sale: false,
      BestSeller: false,
      image:
        'https://framerusercontent.com/images/P5z58RDJ0pbV2D7WkFImxVgs.jpg',
      secondImage:
        'https://framerusercontent.com/images/ixAEJVtgycAmvKdgNNXOKZa3Y0.jpg',
      TypeOfClothing: 'OUTERWEAR',
      NameOfClothing: 'ELEMENTS WEATHER JACKET',
      Price: 185,
    },
    {
      New: true,
      Sale: false,
      BestSeller: false,
      image:
        'https://framerusercontent.com/images/aZ9zcbzKhpZu7InzdF7nT63ymJc.jpg',
      secondImage:
        'https://framerusercontent.com/images/ZSQvjNr4VOfw2bgQdjwy77ojoM.jpg',
      TypeOfClothing: 'BOTTOMS',
      NameOfClothing: 'MOTION TECH SHORTS',
      Price: 125,
    },
  ]);

  return (
    <div
      ref={parentRef}
      className="min-h-[20vh] flex flex-col md:flex-row-reverse relative overflow-hidden mt-2"
    >
      <motion.div
        ref={chickenRef}
        style={{
          backgroundImage: `url(https://framerusercontent.com/images/FXLfBdemQHg5Qj9lOwr6s7HXZbI.jpg?scale-down-to=1024)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          y: isMobile ? 0 : smoothTranslateY, // Disable movement in mobile view
        }}
        className="flex-1 min-h-[200px] h-[600px] flex flex-col justify-start border-2 border-neutral-500 mx-2 mt-2"
      >
        <Link
          href={'/shop'}
          className="px-4 flex justify-start items-center gap-2 z-[200] md:py-10"
        >
          <span className="text-2xl font-bold">SHOP NOW</span>
          <IoIosArrowDropright className="text-3xl" />
        </Link>
        <span className=" text-3xl lg:text-8xl font-bold px-4">
          BEST SELLERS
        </span>
      </motion.div>
      <div className="flex-1">
        <HomeCards cardClothes={cardClothes} />
      </div>
    </div>
  );
}
