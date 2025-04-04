'use client';

import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [openShop, setOpenShop] = useState(false);

  const links = [
    { href: '/about', label: 'ABOUT' },
    { href: '/journal', label: 'JOURNAL' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const shopCategories = [
    { href: '/shop', label: 'ALL' },
    { href: '/shop/?category=TOPS', label: 'TOPS' },
    { href: '/shop/?category=BOTTOMS', label: 'BOTTOMS' },
    { href: '/shop/?category=OUTERWEAR', label: 'OUTERWEAR' },
    { href: '/shop/?category=ACCESSORIES', label: 'ACCESSORIES' },
    { href: '/shop/?category=NEW-ARRIVALS', label: 'NEW ARRIVALS' },
    { href: '/shop/?category=BEST-SELLERS', label: 'BEST SELLERS' },
    { href: '/shop/?category=SALE', label: 'SALE' },
  ];

  const shopCollections = [
    { href: '/collections/elements', label: 'ELEMENTS' },
    { href: '/collections/motion', label: 'MOTION' },
    { href: '/collections/freedom', label: 'FREEDOM' },
    { href: '/collection/essentials', label: 'ESSENTIALS' },
  ];

  return (
    <div className="border-r h-full flex items-center pr-4 border-r-neutral-500 z-10">
      <MotionConfig transition={{ duration: 0.2, ease: 'easeInOut' }}>
        <motion.button
          className="relative h-20 w-10 "
          onClick={() => setOpen((prev) => !prev)}
          animate={open ? 'active' : 'notActive'}
          initial={false}
        >
          <motion.span
            className="absolute h-1 w-10 bg-white"
            style={{
              left: '50%',
              top: '35%',
              x: '-50%',
              y: '-50%',
            }}
            variants={{
              active: {
                rotate: ['0deg', '0deg', '45deg'],
                top: ['35%', '50%', '50%'],
              },
              notActive: {
                rotate: ['45deg', '0deg', '0deg'],
                top: ['50%', '50%', '35%'],
              },
            }}
          ></motion.span>
          <motion.span
            className="absolute h-1 w-10 bg-white"
            style={{
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            variants={{
              active: {
                rotate: ['0deg', '0deg', '-45deg'],
              },
              notActive: {
                rotate: ['-45deg', '0deg', '0deg'],
              },
            }}
          ></motion.span>
        </motion.button>
      </MotionConfig>
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] overflow-scroll  ">
          <motion.div
            initial={{ y: '-200%' }}
            animate={open ? { y: '0%' } : { y: '-200%' }}
            transition={{ duration: 0.3, delay: open ? 0 : 0.3 }}
            className="flex flex-col text-2xl font-extrabold tracking-wide "
          >
            <div className=" px-4 py-4 flex justify-between items-center w-full">
              <Link
                href={'/shop'}
                onClick={() => setOpen(false)}
              >
                <span>SHOP</span>
              </Link>
              <FaChevronDown
                className="cursor-pointer h-[28px] w-[28px]"
                onClick={() => setOpenShop((prev) => !prev)}
              />
            </div>
            <hr className="w-full border-gray-500 my-4" />

            {openShop ? (
              <div
                className=" h-0 transition-[height] duration-300"
                style={{ height: openShop ? 'auto' : '0px' }}
              >
                <motion.div
                  initial={{ y: '-100%' }}
                  animate={openShop ? { y: '0%' } : { y: '-100%' }}
                  transition={{ duration: 0.3, delay: open ? 0 : 0.3 }}
                >
                  <div className="flex flex-col gap-4 mx-4">
                    <span className="text-neutral-500 text-base font-bold">
                      CATEGORIES
                    </span>
                    {shopCategories.map((category, index) => (
                      <div
                        key={index}
                        className="mt-2"
                      >
                        <Link
                          onClick={() => setOpen((prev) => !prev)}
                          href={category.href}
                        >
                          {category.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <hr className="w-full border-gray-500 my-6" />
                  <div className="flex flex-col gap-4 mx-4">
                    <span className="text-neutral-500 text-base font-bold">
                      COLLECTIONS
                    </span>
                    {shopCollections.map((collection, index) => (
                      <div
                        key={index}
                        className="mt-2"
                      >
                        <Link href={collection.href}>{collection.label}</Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
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
                      onClick={() => setOpen((prev) => !prev)}
                      className="mx-4 "
                    >
                      {link.label}
                    </Link>
                    <hr className="w-full border-gray-500 my-5" />
                  </div>
                ))}
                <div className="flex flex-col gap-4">
                  <Link
                    href={'/contact'}
                    onClick={() => setOpen((prev) => !prev)}
                    className="mx-4 text-neutral-500 hover:text-white"
                  >
                    SHIPPING & DELIVERY
                  </Link>
                  <Link
                    href={'/contact'}
                    onClick={() => setOpen((prev) => !prev)}
                    className="mx-4 text-neutral-500 hover:text-white"
                  >
                    RETURNS & REFUNDS
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
