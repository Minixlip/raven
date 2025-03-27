'use client';
import Link from 'next/link';

import { FaArrowTurnUp } from 'react-icons/fa6';

export default function ItemDisplay(props) {
  return (
    <div className='min-h-screen flex'>
      <div className='flex-1 flex flex-col border-r border-neutral-500'>
        <div className='flex-1 flex flex-col py-4 px-4 font-bold'>
          <div className='flex-1'>
            <div className='flex flex-col gap-4'>
              <ul className='flex gap-2'>
                <li>
                  <Link href='/shop'>SHOP</Link>
                </li>
                <span>/</span>
                <li>
                  <Link href='/shop/tops'>TOPS</Link>
                </li>
                <span>/</span>
                <li className='text-neutral-500'>
                  <Link href={`/shop/tops/${props.clothing.clothingName}`}>
                    {props.clothing.clothingName}
                  </Link>
                </li>
              </ul>
              <span className='text-3xl lg:text-6xl'>
                {props.clothing.clothingName}
              </span>
              <p className='w-[80%] text-wrap text-xl font-semibold tracking-wider mt-4'>
                {props.clothing.description}
              </p>
              <ul className='flex gap-4 mt-4 text-neutral-500 font-sans'>
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
          <div className='flex-1 flex flex-col gap-4'>
            <span>Size</span>
            <div className='flex gap-4'>
              <button className='border border-white text-white p-4 rounded-md flex-1'>
                XS
              </button>
              <button className='border border-neutral-500 text-neutral-500 p-4 rounded-md flex-1'>
                S
              </button>
              <button className='border border-neutral-500 text-neutral-500 p-4 rounded-md flex-1'>
                M
              </button>
              <button className='border border-neutral-500 text-neutral-500 p-4 rounded-md flex-1'>
                L
              </button>
              <button className='border border-neutral-500 text-neutral-500 p-4 rounded-md flex-1'>
                XL
              </button>
              <button className='border border-neutral-500 text-neutral-500 p-4 rounded-md flex-1'>
                XXL
              </button>
            </div>
            <span>Colour</span>
            <div className='flex gap-4'>
              <button className='border border-white text-white p-4 rounded-md flex-1'>
                White
              </button>
              <button className='border border-neutral-500 text-neutral-500 p-4 rounded-md flex-1'>
                Black
              </button>
            </div>
            <div className='flex justify-end items-center mt-4 text-2xl tracking-wider gap-2'>
              <span>Size Guide</span>
              <FaArrowTurnUp />
            </div>
          </div>
        </div>
        <div className='flex min-h-[25vh] px-4 py-4 border-t border-neutral-500'>
          <div className='flex-1 flex flex-col justify-center gap-4'>
            <div>
              <span className='text-3xl font-bold'>
                ${props.clothing.price}
              </span>
            </div>
            <div className=''>
              <span className='text-neutral-500 font-bold '>
                <span className='text-white underline'>SHIPPING </span>
                CALCULATED AT CHECKOUT
              </span>
            </div>
          </div>
          <div className='flex-1 flex justify-end items-center'>
            <button className='border bg-white text-black font-bold p-4 rounded-md'>
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
      <div className='flex-1 '>
        <div
          className='h-full w-full'
          style={{
            backgroundImage: `url(${props.clothing.link})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            zIndex: '-99',
          }}
        >
          <div className='flex flex-col gap-4 justify-start items-end p-4  '>
            <div
              className='h-[100px] w-[100px] border border-neutral-500'
              style={{
                backgroundImage: `url(https://framerusercontent.com/images/rO3nueqqdzWMFmQMfScFEHQKDK8.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='h-[100px] w-[100px] border border-neutral-500'
              style={{
                backgroundImage: `url(https://framerusercontent.com/images/Lob4Ke8wWWs4mRnpIc1nR5otRQ.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
              }}
            ></div>
            <div
              className='h-[100px] w-[100px] border border-neutral-500'
              style={{
                backgroundImage: `url(${props.clothing.link})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className='h-[100px] w-[100px] border border-neutral-500'
              style={{
                backgroundImage: `url(https://framerusercontent.com/images/BVM804ckLux0BNzhhthMfZjDC4.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
