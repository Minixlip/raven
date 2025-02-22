'use client';

import BgSlideshow from './components/Home/BgSlideshow';
import HomeCardSection from './components/Home/HomeCardSection';
import HomeCardSection2 from './components/Home/HomeCardSection2';
import DisplayClothes from './components/Home/DisplayClothesComp/DisplayClothes';

export default function Home() {
  return (
    <main>
      <BgSlideshow />
      <HomeCardSection />
      <HomeCardSection2 />
      <DisplayClothes />
    </main>
  );
}
