'use client';

import BgSlideshow from './components/Home/BgSlideshow';
import HomeCardSection from './components/Home/HomeCardSection';
import HomeCardSection2 from './components/Home/HomeCardSection2';
import DisplayClothes from './components/Home/DisplayClothesComp/DisplayClothes';
import HomeNavigationCards from './components/Home/HomeNavigationCards';
import DisplayCollections from './components/Home/DisplayCollections';

import { FaInstagramSquare } from 'react-icons/fa';
import Link from 'next/link';
import JournalDisplay from './components/Home/JournalDisplay';
import JournalCardDisplay from './components/Home/JournalCardDisplay';
import Chatbot from './components/Misc/Chatbot';

export default function Home() {
  return (
    <main>
      <BgSlideshow />
      <HomeCardSection />
      <HomeCardSection2 />
      <DisplayClothes />
      <HomeNavigationCards />
      <DisplayCollections />
      <div className="min-h-[30vh] hidden md:flex flex-col px-8 text-wrap justify-center">
        <span className="font-bold tracking-tight text-5xl">FOLLOW RAVEN</span>
        <span className="font-semibold tracking-tight text-neutral-500 text-3xl">
          WEAR IT YOUR WAY. TAG US ON INSTAGRAM FOR YOUR CHANCE TO BE FEATURED.
        </span>
        <Link href={'https://www.instagram.com'}>
          <FaInstagramSquare
            size={40}
            color="grey"
            className="mt-4"
          />
        </Link>
      </div>
      <hr className="hidden md:flex w-full py-10 border-neutral-500" />
      <JournalDisplay />
      <JournalCardDisplay />
      <Chatbot />
    </main>
  );
}
