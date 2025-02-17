'use client';

import { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Link from 'next/link';

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <HiOutlineMenuAlt4
        className="cursor-pointer h-[28px] w-[28px]"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] ">
          <div className="flex flex-col items-start justify-start gap-4 text-2xl z-10 font-extrabold tracking-wide ">
            <Link
              href={'/'}
              className="mx-4 mt-4"
            >
              <span>SHOP</span>
            </Link>
            <hr className="w-full border-gray-500" />
            <Link
              href={'/'}
              className="mx-4 "
            >
              ABOUT
            </Link>
            <hr className="w-full border-gray-500" />
            <Link
              href={'/'}
              className="mx-4 "
            >
              JOURNAL
            </Link>
            <hr className="w-full border-gray-500" />
            <Link
              href={'/'}
              className="mx-4 "
            >
              CONTACT
            </Link>
            <hr className="w-full border-gray-500" />
            <Link
              href={'/'}
              className="mx-4 text-neutral-500"
            >
              SHIPPING & DELIVERY
            </Link>
            <Link
              href={'/'}
              className="mx-4 text-neutral-500"
            >
              RETURNS & REFUNDS
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
