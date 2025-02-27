'use client';

import { GiBirdClaw } from 'react-icons/gi';
import Link from 'next/link';
import Menu from './Menu';
import NavbarMenu from './NavbarMenu';

export default function Navbar() {
  return (
    <nav className="h-20 flex pl-4 bg-black border-t-[1px] border-b-[1px] border-t-gray-400 border-b-gray-500 relative">
      <div className="h-full flex items-center justify-between w-full">
        {/* MOBILE */}
        <Menu />
        <Link
          href={'/'}
          className=" h-full flex items-center justify-center flex-1 gap-1 font-bold md:text-2xl tracking-widest border-r border-r-neutral-500"
        >
          <span>Raven</span>
          <GiBirdClaw />
        </Link>
        {/* navbar buttons */}
        <NavbarMenu />
      </div>
    </nav>
  );
}
