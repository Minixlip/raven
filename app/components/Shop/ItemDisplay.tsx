'use client';
import Link from 'next/link';

import { FaArrowTurnUp } from 'react-icons/fa6';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ClothingItem {
  nameOfClothing: string;
  typeOfClothing: string;
  link: string;
  description: string;
  price: number;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

export default function ItemDisplay({ clothing }: { clothing: ClothingItem }) {
  const [selectedImg, setSelectedImg] = useState(clothing.img1);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [selectedColour, setSelectedColour] = useState('Black');

  const linkBackToCategory = `/shop/?category=${clothing.typeOfClothing}`;
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row bg-black">
      <div className="flex-1 flex flex-col border-r border-neutral-500 ">
        <div className="flex-1 flex flex-col py-4 px-4 font-bold">
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <ul className="flex gap-2">
                <li>
                  <Link href="/shop">SHOP</Link>
                </li>
                <span>/</span>
                <li>
                  <Link href={linkBackToCategory}>
                    {clothing.typeOfClothing}
                  </Link>
                </li>
                <span>/</span>
                <li className="text-neutral-500">
                  <Link
                    href={`/shop/${clothing.nameOfClothing.replaceAll(
                      ' ',
                      '-'
                    )}`}
                  >
                    {clothing.nameOfClothing}
                  </Link>
                </li>
              </ul>
              <span className="text-3xl lg:text-6xl">
                {clothing.nameOfClothing}
              </span>
              <p className="w-[80%] text-wrap text-xl font-semibold tracking-wider mt-4">
                {clothing.description}
              </p>
              <ul className="flex gap-4 mt-4 text-neutral-500 font-sans">
                <li>
                  <span>MATERIALS</span>
                </li>
                <li>
                  <span>CARE</span>
                </li>
                <li>
                  <span>SHIPPING</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <span>Size</span>
            <div className="flex gap-4">
              <button
                className={`border text-white p-4 rounded-md flex-1 ${
                  selectedSize === 'XS' ? `border-white` : `border-neutral-500`
                }`}
                disabled={selectedSize === 'XS'}
                onClick={() => setSelectedSize('XS')}
              >
                XS
              </button>
              <button
                className={`border text-white p-4 rounded-md flex-1 ${
                  selectedSize === 'S' ? `border-white` : `border-neutral-500`
                }`}
                disabled={selectedSize === 'S'}
                onClick={() => setSelectedSize('S')}
              >
                S
              </button>
              <button
                className={`border text-white p-4 rounded-md flex-1 ${
                  selectedSize === 'M' ? `border-white` : `border-neutral-500`
                }`}
                disabled={selectedSize === 'M'}
                onClick={() => setSelectedSize('M')}
              >
                M
              </button>
              <button
                className={`border text-white p-4 rounded-md flex-1 ${
                  selectedSize === 'L' ? `border-white` : `border-neutral-500`
                }`}
                disabled={selectedSize === 'L'}
                onClick={() => setSelectedSize('L')}
              >
                L
              </button>
              <button
                className={`border text-white p-4 rounded-md flex-1 ${
                  selectedSize === 'XL' ? `border-white` : `border-neutral-500`
                }`}
                disabled={selectedSize === 'XL'}
                onClick={() => setSelectedSize('XL')}
              >
                XL
              </button>
              <button
                className={`border text-white p-4 rounded-md flex-1 ${
                  selectedSize === 'XXL' ? `border-white` : `border-neutral-500`
                }`}
                disabled={selectedSize === 'XXL'}
                onClick={() => setSelectedSize('XXL')}
              >
                XXL
              </button>
            </div>
            <span>Colour</span>
            <div className="flex gap-4">
              <button
                className={`border text-white p-4 rounded-md flex-1 ${
                  selectedColour === 'White'
                    ? `border-white`
                    : `border-neutral-500`
                }`}
                disabled={selectedColour === 'White'}
                onClick={() => setSelectedColour('White')}
              >
                White
              </button>
              <button
                className={`border text-white p-4 rounded-md flex-1 ${
                  selectedColour === 'Black'
                    ? `border-white`
                    : `border-neutral-500`
                }`}
                disabled={selectedColour === 'Black'}
                onClick={() => setSelectedColour('Black')}
              >
                Black
              </button>
            </div>
            <div className="flex justify-end items-center mt-4 text-2xl tracking-wider gap-2">
              <span>Size Guide</span>
              <FaArrowTurnUp />
            </div>
          </div>
        </div>
        <div className="flex min-h-[25vh] px-4 py-4 border-t border-neutral-500">
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div>
              <span className="text-3xl font-bold">${clothing.price}</span>
            </div>
            <div className="">
              <span className="text-neutral-500 font-bold ">
                <span className="text-white underline">SHIPPING </span>
                CALCULATED AT CHECKOUT
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <button className="border bg-white text-black font-bold p-4 rounded-md">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <motion.div
          key={selectedImg} // Triggers animation when the image changes
          initial={{ backgroundPositionX: '-100%' }} // Start from the left
          animate={{ backgroundPositionX: '0%' }} // Move to the center
          transition={{ duration: 0.5, ease: 'easeOut' }} // Smooth transition
          className="h-full w-full"
          style={{
            backgroundImage: `url(${selectedImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            zIndex: '-99',
          }}
        >
          <div className="flex flex-col gap-4 justify-start items-end p-4  ">
            <div
              className={`
                h-[100px] w-[100px] border cursor-pointer 
                ${
                  selectedImg === clothing.img1
                    ? 'border-white'
                    : 'border-neutral-500'
                }
              `}
              style={{
                backgroundImage: `url(${clothing.img1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              onClick={() => setSelectedImg(clothing.img1)}
            ></div>
            <div
              className={`
                h-[100px] w-[100px] border cursor-pointer 
                ${
                  selectedImg === clothing.img2
                    ? 'border-white'
                    : 'border-neutral-500'
                }
              `}
              style={{
                backgroundImage: `url(${clothing.img2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
              }}
              onClick={() => setSelectedImg(clothing.img2)}
            ></div>
            <div
              className={`
                h-[100px] w-[100px] border cursor-pointer 
                ${
                  selectedImg === clothing.img3
                    ? 'border-white'
                    : 'border-neutral-500'
                }
              `}
              style={{
                backgroundImage: `url(${clothing.img3})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              onClick={() => setSelectedImg(clothing.img3)}
            ></div>
            <div
              className={`
                h-[100px] w-[100px] border cursor-pointer 
                ${
                  selectedImg === clothing.img4
                    ? 'border-white'
                    : 'border-neutral-500'
                }
              `}
              style={{
                backgroundImage: `url(${clothing.img4})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              onClick={() => setSelectedImg(clothing.img4)}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
