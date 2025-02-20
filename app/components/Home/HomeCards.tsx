'use client';

import { useState } from 'react';
import Card from '../Misc/Card';

export default function HomeCards() {
  const [cardClothes, setCardClothes] = useState([
    {
      New: true,
      Sale: false,
      BestSeller: false,
      image:
        'https://framerusercontent.com/images/TITuLcYSx53fInKnsoSGfE8Xuw.jpg',
      secondImage:
        'https://framerusercontent.com/images/rO3nueqqdzWMFmQMfScFEHQKDK8.jpg',
      TypeOfClothing: 'TOPS',
      NameOfClothing: 'FREEDOM STATEMENT CREWNECK',
      Price: 145,
    },
    {
      New: true,
      Sale: false,
      BestSeller: false,
      image:
        'https://framerusercontent.com/images/TzE4HV2Rd2nSnBPovKnaeVJ4ig.jpg',
      secondImage:
        'https://framerusercontent.com/images/Go8FgbJq5k83GEHQpJxfiOfyU.jpg',
      TypeOfClothing: 'TOPS',
      NameOfClothing: 'FREEDOM STATEMENT CREWNECK',
      Price: 145,
    },
    {
      New: true,
      Sale: false,
      BestSeller: false,
      image: 'https://framerusercontent.com/images/tgZdGQSoxXaU1e2WoJLa4YQ.jpg',
      secondImage:
        'https://framerusercontent.com/images/dVQplzo9TYGR0ic60Unw0TJjI.jpg',
      TypeOfClothing: 'TOPS',
      NameOfClothing: 'FREEDOM STATEMENT CREWNECK',
      Price: 145,
    },
    {
      New: true,
      Sale: false,
      BestSeller: false,
      image:
        'https://framerusercontent.com/images/WCPUxU8le7cGYEMic8GQuKrQTLI.jpg',
      secondImage:
        'https://framerusercontent.com/images/D9XYlok0cgs0AR1T9UYgXebum4.jpg',
      TypeOfClothing: 'TOPS',
      NameOfClothing: 'FREEDOM STATEMENT CREWNECK',
      Price: 145,
    },
  ]);

  return (
    <div className='flex flex-wrap gap-2 py-2'>
      <Card cardInfo={cardClothes[0]} />
      <Card cardInfo={cardClothes[1]} />
      <Card cardInfo={cardClothes[2]} />
      <Card cardInfo={cardClothes[3]} />
    </div>
  );
}
