'use client';

import { FaShoppingBag } from 'react-icons/fa';
import { GiBirdClaw } from 'react-icons/gi';
import { IoPerson } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import Menu from './Menu';

export default function Navbar() {
  return (
    <nav className="h-20 flex px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-black border-t-[1px] border-b-[1px] border-t-gray-400 border-b-gray-500 relative">
      <div className="h-full flex items-center justify-between w-full">
        {/* MOBILE */}
        <Menu />
        <Link
          href={'/'}
          className=" h-full flex items-center justify-start gap-1 font-bold text-2xl tracking-widest"
        >
          <span>Raven</span>
          <GiBirdClaw />
        </Link>
      </div>
    </nav>
  );
}
