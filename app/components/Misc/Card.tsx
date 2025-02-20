'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Card(props) {
  const [primaryPhoto, setPrimaryPhoto] = useState([
    props.cardInfo.image,
    props.cardInfo.secondImage,
  ]);

  const [displayPhoto, setDisplayPhoto] = useState(primaryPhoto[0]);

  return (
    <div
      className='flex flex-col border-2 border-neutral-500 w-fit cursor-pointer'
      onMouseEnter={() => setDisplayPhoto(primaryPhoto[1])}
      onMouseLeave={() => setDisplayPhoto(primaryPhoto[0])}
    >
      <motion.div
        style={{
          backgroundImage: `url(${displayPhoto})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
        className='min-h-96 min-w-96 border-b-2 border-neutral-500'
      />
      <div className='flex flex-col p-4 gap-3'>
        <span className='text-xl font-bold text-neutral-500'>
          {props.cardInfo.TypeOfClothing}
        </span>
        <span className='text-xl font-bold'>
          {props.cardInfo.NameOfClothing}
        </span>
        <span className='text-xl font-bold'>${props.cardInfo.Price}</span>
      </div>
    </div>
  );
}
