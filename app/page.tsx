'use client';

import BgSlideshow from './components/Home/BgSlideshow';
import HomeCardSection from './components/Home/HomeCardSection';
import HomeCardSection2 from './components/Home/HomeCardSection2';
import DisplayClothes from './components/Home/DisplayClothesComp/DisplayClothes';
import HomeNavigationCards from './components/Home/HomeNavigationCards';

export default function Home() {
  return (
    <main>
      <BgSlideshow />
      <HomeCardSection />
      <HomeCardSection2 />
      <DisplayClothes />
      <HomeNavigationCards />
      <div className="min-h-screen">hhh</div>
    </main>
  );
}
