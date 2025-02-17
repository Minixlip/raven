'use client';

import { IoPerson } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NavbarMenu() {
  const [searchActive, setSearchActive] = useState(false);
  const [shoppingBagActive, setShoppingBagActive] = useState(false);
  const [items, setItems] = useState([]);

  const searchRef = useRef(null);
  const bagRef = useRef(null);

  // Close search bar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchActive(false);
      }
    }

    if (searchActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchActive]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (bagRef.current && !bagRef.current.contains(event.target as Node)) {
        setShoppingBagActive(false);
      }
    }

    if (shoppingBagActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [shoppingBagActive]);

  return (
    <div className=" h-full">
      <div className="text-2xl h-full ">
        <button
          onClick={() => setSearchActive((prev) => !prev)}
          className="border-r border-r-neutral-500 h-full px-4 hover:bg-neutral-800"
        >
          <FiSearch />
        </button>
        <button className="border-r border-r-neutral-500 h-full px-4 hover:bg-neutral-800">
          <Link href={'/profile'}>
            <IoPerson />
          </Link>
        </button>
        <button
          onClick={() => setShoppingBagActive((prev) => !prev)}
          className=" h-full px-4 border-r border-r-neutral-500 relative hover:bg-neutral-800"
        >
          <FaShoppingBag />
          <span className="p-1 bg-white text-black fixed top-0 right-0 text-sm font-bold">
            {items.length}
          </span>
        </button>
      </div>
      {/* Search Bar */}
      {searchActive && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div
            ref={searchRef}
            className="bg-black border border-white p-4 rounded-md shadow-lg w-1/3 flex items-center gap-2"
          >
            <PiMagnifyingGlass className="h-6 w-6" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-1 border bg-black border-black rounded-md focus:outline-none placeholder:text-white placeholder:font-bold placeholder:text-lg placeholder:tracking-wider font-bold"
            />
          </div>
        </div>
      )}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: shoppingBagActive ? '0%' : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 right-0 h-full w-[40%] bg-black border-2 border-neutral-500 shadow-lg z-50`}
        ref={bagRef}
      >
        <div className="p-4 flex justify-between items-center border-b border-neutral-500">
          <h2 className="text-xl font-bold text-neutral-500 flex gap-2">
            <span className="text-white">{items.length}</span>ITEMS IN YOUR BAG.
          </h2>
          <button
            onClick={() => setShoppingBagActive(false)}
            className="text-white font-bold text-3xl"
          >
            ✕
          </button>
        </div>

        {/* Bag Content */}
        <div className="p-4 flex flex-col h-[calc(100%-80px)] w-full">
          {items.length === 0 ? (
            <div className="flex flex-col justify-center items-center flex-1">
              <p className="text-3xl font-bold">YOUR BAG IS EMPTY</p>
              <p className="text-sm font-bold text-neutral-500">
                ADD SOME ITEMS TO THE BAG.
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center flex-1">
              <p className="text-3xl font-bold">YOU HAVE ITEMS</p>
            </div>
          )}
          <div className="flex flex-col gap-8 border-t-2 border-neutral-500 w-[full] pt-6">
            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-sm text-neutral-500 font-bold">
                  SHIPPING & TAXES
                </span>
                <span className="text-3xl font-bold">SUBTOTAL</span>
              </div>
              <div className="flex flex-col items-end gap-4">
                <span className="text-sm text-neutral-500 font-bold">
                  CALCULATED AT CHECKOUT
                </span>
                <span className="text-3xl font-bold">$0</span>
              </div>
            </div>
            {items.length ? (
              <button className="text-black bg-white p-4 text-2xl font-bold tracking-tight rounded-lg">
                CHECKOUT
              </button>
            ) : (
              <button
                disabled
                className="text-black bg-neutral-500 p-4 text-2xl font-bold tracking-tight rounded-lg"
              >
                YOUR BAG IS EMPTY
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Background overlay when bag is open */}
      {shoppingBagActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}
    </div>
  );
}
