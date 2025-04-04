'use client';

import { IoPerson } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';

import Link from 'next/link';

export default function NavbarMenu() {
  const [searchActive, setSearchActive] = useState(false);
  const [shoppingBagActive, setShoppingBagActive] = useState(false);
  const [items, setItems] = useState([]); // Replace this with real cart items

  const [query, setQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cart, removeFromCart, clearCart } = useCart();

  const searchRef = useRef<HTMLDivElement | null>(null);
  const bagRef = useRef<HTMLDivElement | null>(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/shop');
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by query
  useEffect(() => {
    if (!query.trim()) {
      setFilteredResults([]);
      return;
    }

    const results = allProducts.filter((product: any) =>
      product.nameOfClothing.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(results);
  }, [query, allProducts]);

  // Handle click outside search
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setTimeout(() => setSearchActive(false), 100);
      }
    };
    if (searchActive) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [searchActive]);

  // Handle click outside bag
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (bagRef.current && !bagRef.current.contains(e.target as Node)) {
        setShoppingBagActive(false);
      }
    };
    if (shoppingBagActive) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [shoppingBagActive]);

  return (
    <div className="h-full">
      <div className="text-2xl h-full flex">
        <button
          onClick={() => setSearchActive((prev) => !prev)}
          className="border-r border-r-neutral-500 h-full px-4 hover:bg-neutral-800"
        >
          <FiSearch />
        </button>
        <button
          onClick={() => (location.href = '/profile')}
          className="border-r border-r-neutral-500 h-full px-4 hover:bg-neutral-800"
        >
          <IoPerson />
        </button>
        <button
          onClick={() => setShoppingBagActive((prev) => !prev)}
          className="h-full px-4 border-r border-r-neutral-500 relative hover:bg-neutral-800"
        >
          <FaShoppingBag />
          <span className="p-1 bg-white text-black fixed top-0 right-0 text-sm font-bold">
            {cart.length}
          </span>
        </button>
      </div>

      {/* Search Box */}
      {searchActive && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div
            ref={searchRef}
            className="bg-black border border-white p-4 rounded-md shadow-lg w-1/3 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <PiMagnifyingGlass className="h-6 w-6" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clothing..."
                className="w-full p-1 border bg-black border-black rounded-md focus:outline-none placeholder:text-white placeholder:font-bold placeholder:text-lg placeholder:tracking-wider font-bold"
              />
            </div>

            {/* Search Results */}
            <div className="mt-2 bg-neutral-900 rounded-md max-h-60 overflow-y-auto">
              {loading ? (
                <p className="p-2 text-neutral-500">Loading products...</p>
              ) : filteredResults.length > 0 ? (
                filteredResults.map((product: any) => (
                  <Link
                    key={product._id}
                    onClick={() => setSearchActive(false)}
                    href={`/shop/${product.nameOfClothing.replaceAll(
                      ' ',
                      '-'
                    )}`}
                    className="block p-2 hover:bg-neutral-800 text-white"
                  >
                    {product.nameOfClothing} - ${product.price}
                  </Link>
                ))
              ) : (
                <p className="p-2 text-neutral-500">No results found.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Shopping Bag */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: shoppingBagActive ? '0%' : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 right-0 h-full md:w-[30%] bg-black border-2 border-neutral-500 shadow-lg z-50 flex flex-col"
        ref={bagRef}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-neutral-500">
          <h2 className="sm:text-xl font-bold text-neutral-500 flex gap-2">
            <span className="text-white">{cart.length}</span> ITEMS IN YOUR BAG.
          </h2>
          <button
            onClick={() => setShoppingBagActive(false)}
            className="text-white font-bold text-3xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className=" flex-grow overflow-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-3xl font-bold">YOUR BAG IS EMPTY</p>
              <p className="text-sm font-bold text-neutral-500">
                ADD SOME ITEMS TO THE BAG.
              </p>
            </div>
          ) : (
            <div>
              {/* Example list item, replace with real item map */}
              {cart.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="text-white border-b border-neutral-600 flex justify-between"
                >
                  <div
                    className="min-w-[100px] min-h-[100px] border border-neutral-500"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top',
                    }}
                  ></div>
                  <div className="flex flex-1 justify-between px-4 py-1 font-bold">
                    <div className="flex flex-col justify-between gap-2">
                      <div className="flex flex-col text-lg">
                        <span>{item.nameOfClothing}</span>
                        <span className="text-neutral-500">{item.size}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className=" px-1">{item.quantity}</span>
                        <button
                          className="border px-1"
                          onClick={() => removeFromCart(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <span>${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="border-t border-neutral-500 p-4 space-y-2">
          <div className="flex justify-between text-white font-bold text-lg">
            <span>SUBTOTAL</span>
            <span>
              $
              {cart
                .reduce((acc: number, item: any) => acc + item.price, 0)
                .toFixed(2)}
            </span>
          </div>
          <button
            className="bg-white text-black py-2 w-full font-bold rounded-md hover:bg-neutral-300"
            onClick={() => {
              alert('Checkout successful!');
              clearCart();
            }}
          >
            CHECKOUT
          </button>
        </div>
      </motion.div>

      {shoppingBagActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}
    </div>
  );
}
