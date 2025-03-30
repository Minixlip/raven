'use client';
import ShopCard from '../Misc/ShopCard';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AllItemDisplay() {
  const [cardClothes, setCardClothes] = useState([]);
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'ALL';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/shop');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setCardClothes(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]); // Re-fetch products when category changes

  const filteredClothes =
    selectedCategory === 'ALL'
      ? cardClothes
      : cardClothes.filter((item) => item.typeOfClothing === selectedCategory);

  return (
    <motion.div
      key={selectedCategory} // Forces re-render of animation when category changes
      className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 w-full"
      initial={{ clipPath: 'inset(0% 100% 0% 0%)' }} // Start fully hidden
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }} // Unveils from left to right
      transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth transition
    >
      {filteredClothes.length > 0 ? (
        filteredClothes.map((card, index) => (
          <motion.div
            key={index}
            className="flex-1 flex"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
          >
            <ShopCard cardInfo={card} />
          </motion.div>
        ))
      ) : (
        <p className="text-white text-lg">No items found in this category.</p>
      )}
    </motion.div>
  );
}
