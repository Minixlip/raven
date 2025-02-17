'use client';

import { FaShoppingBag } from 'react-icons/fa';
import { GiBirdClaw } from 'react-icons/gi';
import { IoPerson } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex bg-black justify-between items-center border-t-[1px] border-b-[1px] border-t-gray-400 border-b-gray-500 ">
      <div className="flex items-center justify-start gap-1 font-bold text-xl px-4 flex-1">
        <span>Raven</span>
        <GiBirdClaw />
      </div>
      <div className="flex ">
        {/* Navigation buttons */}
        <div className="flex justify-center border-l-2 border-l-gray-500 items-center font-semibold text-lg tracking-wider">
          <div className="px-6">
            <Link href={'/contact'}>Shop</Link>
          </div>
        </div>
        <div className="flex justify-center border-l-2 border-l-gray-500 items-center font-semibold text-lg">
          <div className="px-8">
            <Link href={'/contact'}>About</Link>
          </div>
        </div>
        <div className="flex justify-center border-l-2 border-l-gray-500 items-center font-semibold text-lg">
          <div className="px-8">
            <Link href={'/contact'}>Journal</Link>
          </div>
        </div>
        <div className="flex justify-center border-l-2 border-l-gray-500 items-center font-semibold text-lg">
          <div className="px-8">
            <Link href={'/contact'}>Contact</Link>
          </div>
        </div>
        {/* icon buttons */}
        <button
          onClick={() => alert('Searched!')}
          className=" px-4 py-5 border-l-2 border-l-gray-500 bg-black hover:bg-slate-300 hover:bg-opacity-5 cursor-pointer flex justify-center items-center"
        >
          <FiSearch size={'16px'} />
        </button>
        <button
          onClick={() => alert('Profile !')}
          className=" px-4 py-5 border-l-2 border-l-gray-500 bg-black hover:bg-slate-300 hover:bg-opacity-5 cursor-pointer flex justify-center items-center"
        >
          <IoPerson size={'16px'} />
        </button>
        <button
          onClick={() => alert('Shopping Bag!')}
          className=" px-4 py-5 border-l-2 border-l-gray-500 bg-black hover:bg-slate-300 hover:bg-opacity-5 cursor-pointer flex justify-center items-center"
        >
          <FaShoppingBag size={'16px'} />
        </button>
      </div>
    </nav>
  );
}
