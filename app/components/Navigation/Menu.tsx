'use client';

import { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [openShop, setOpenShop] = useState(false);

  const links = [
    { href: '/', label: 'ABOUT' },
    { href: '/', label: 'JOURNAL' },
    { href: '/', label: 'CONTACT' },
  ];

  const shopCategories = [
    { href: '/', label: 'ALL' },
    { href: '/', label: 'TOPS' },
    { href: '/', label: 'BOTTOMS' },
    { href: '/', label: 'OUTERWEAR' },
    { href: '/', label: 'ACCESSORIES' },
    { href: '/', label: 'NEW ARRIVALS' },
    { href: '/', label: 'BEST SELLERS' },
    { href: '/', label: 'SALE' },
  ];

  return (
    <div>
      <HiOutlineMenuAlt4
        className="cursor-pointer h-[28px] w-[28px]"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] ">
          <div className="flex flex-col text-2xl z-10 font-extrabold tracking-wide ">
            <div className=" px-4 py-4 flex justify-between items-center w-full">
              <Link href={'/'}>
                <span>SHOP</span>
              </Link>
              <FaChevronDown
                className="cursor-pointer h-[28px] w-[28px]"
                onClick={() => setOpenShop((prev) => !prev)}
              />
            </div>
            <hr className="w-full border-gray-500 my-4" />

            {openShop ? (
              <div className="flex flex-col gap-4 mx-4">
                <span className="text-neutral-500 text-base font-bold">
                  CATEGORIES
                </span>
                {shopCategories.map((category, index) => (
                  <div
                    key={index}
                    className="mt-2"
                  >
                    <Link href={category.href}>{category.label}</Link>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {links.map((link, index) => (
                  <div
                    key={index}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className="mx-4 "
                    >
                      {link.label}
                    </Link>
                    <hr className="w-full border-gray-500 my-5" />
                  </div>
                ))}
                <div className="flex flex-col gap-4">
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
        </div>
      )}
    </div>
  );
}
