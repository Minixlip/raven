'use client';

import BgSlideshow from './components/Home/BgSlideshow';
import HomeCardSection from './components/Home/HomeCardSection';
import HomeCardSection2 from './components/Home/HomeCardSection2';

export default function Home() {
  return (
    <main>
      <BgSlideshow />
      <HomeCardSection />
      <HomeCardSection2 />
      <div className="min-h-screen"></div>
    </main>
  );
}
