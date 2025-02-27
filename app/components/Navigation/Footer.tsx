'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const categories = [
    'ALL',
    'TOPS',
    'BOTTOMS',
    'OUTERWEAR',
    'ACCESSORIES',
    'NEW ARRIVALS',
    'BEST SELLERS',
    'SALE',
  ];

  const support = [
    'MY ACCOUNT',
    'PAYMENT METHODS',
    'RETURNS & REFUNDS',
    'SHIPPING & DELIVERY',
    'TERMS & CONDITIONS',
    'PRIVACY POLICY',
  ];

  const about = ['ABOUT RAVEN', 'JOURNAL', 'CONTACT'];

  const socialMedia = [
    'INSTAGRAM',
    'X / TWITTER',
    'YOUTUBE',
    'FACEBOOK',
    'TWITCH',
  ];

  const renderLinks = (links) => (
    <ul className="space-y-2 mt-4 font-semibold">
      {links.map((link) => (
        <li key={link}>
          <motion.div
            whileHover={{ color: '#ffffff' }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={`/${link.toLowerCase().replace(/ /g, '-')}`}
              className="text-neutral-500"
            >
              {link}
            </Link>
          </motion.div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-[40vh] flex flex-col border-t border-neutral-500 mt-2">
      <div className="flex-1">
        <div className="flex justify-between mx-4 my-4 flex-wrap">
          <div className="">
            <span className="font-bold tracking-widest">CATEGORIES</span>
            {renderLinks(categories)}
          </div>
          <div className="">
            <span className="font-bold tracking-widest">SUPPORT</span>
            {renderLinks(support)}
          </div>
          <div>
            <span className="font-bold tracking-widest">ABOUT</span>
            {renderLinks(about)}
          </div>
          <div>
            <span className="font-bold tracking-widest">SOCIAL MEDIA</span>
            {renderLinks(socialMedia)}
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-500 p-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4">
          {/* Newsletter Subscription */}
          <div className="flex flex-col sm:flex-row items-center w-full max-w-lg">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 p-2 text-black border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="px-4 py-2 font-bold text-white bg-transparent border border-gray-400 rounded-r-md">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              className="w-4 h-4"
            />
            <label
              htmlFor="privacy"
              className="text-sm text-gray-400"
            >
              BY SUBSCRIBING YOU AGREE TO THE PRIVACY POLICY
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="/terms-conditions"
              className="text-sm text-gray-400 hover:underline"
            >
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
