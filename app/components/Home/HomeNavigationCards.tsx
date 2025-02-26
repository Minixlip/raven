'use client';

import CardNavigation from '../Misc/CardNavigation';

export default function HomeNavigationCards() {
  const cardInfo = [
    {
      clothingType: 'Tops',
      previewPhoto:
        'https://framerusercontent.com/images/xloOTP7Fud71cpPDcKyE3yzb8MI.png?scale-down-to=1024',
    },
    {
      clothingType: 'Bottoms',
      previewPhoto:
        'https://framerusercontent.com/images/ppyeHGRd7XFQvhAX6jV2ZLwatI.png?scale-down-to=1024',
    },
    {
      clothingType: 'Outerwear',
      previewPhoto:
        'https://framerusercontent.com/images/F4vmhR5vRnh3IP2YlzKDJ1YXY.png?scale-down-to=1024',
    },
    {
      clothingType: 'Accessories',
      previewPhoto:
        'https://framerusercontent.com/images/v14DO0SPxGXBia6SbmVmgtFHE.png?scale-down-to=1024',
    },
  ];
  return (
    <div className="min-h-[49vh] flex flex-col md:flex-row justify-between gap-2">
      <CardNavigation cardInfo={cardInfo[0]} />
      <CardNavigation cardInfo={cardInfo[1]} />
      <CardNavigation cardInfo={cardInfo[2]} />
      <CardNavigation cardInfo={cardInfo[3]} />
    </div>
  );
}
