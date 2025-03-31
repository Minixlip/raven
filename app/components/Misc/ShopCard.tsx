'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ShopCard(props: any) {
  const primaryPhotos = [props.cardInfo.img1, props.cardInfo.img2];

  const [displayPhoto, setDisplayPhoto] = useState(primaryPhotos[0]);

  return (
    <div
      className="flex-1 flex flex-col border-2 border-neutral-500 cursor-pointer min-w-[400px] relative"
      onMouseEnter={() => setDisplayPhoto(primaryPhotos[1])}
      onMouseLeave={() => setDisplayPhoto(primaryPhotos[0])}
      onClick={() =>
        (location.href = `/shop/${props.cardInfo.nameOfClothing.replaceAll(
          ' ',
          '-'
        )}`)
      }
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
        className="min-h-[400px] border-b-2 border-neutral-500"
      />
      <div className="flex flex-col p-4 gap-3 h-[300px]">
        <span className="text-xl font-bold text-neutral-500">
          {props.cardInfo.typeOfClothing}
        </span>
        <span className="text-xl font-bold text-wra">
          {props.cardInfo.nameOfClothing}
        </span>
        <span className="text-xl font-bold">${props.cardInfo.price}</span>
      </div>
      <div className="absolute top-0 left-5 font-bold flex gap-2">
        {props.cardInfo.itsNew && <span>NEW</span>}
        {props.cardInfo.sale && <span>SALE</span>}
        {props.cardInfo.bestSeller && <span>BEST SELLER</span>}
      </div>
    </div>
  );
}
