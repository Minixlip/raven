'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

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

export default function CategoryNavbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'ALL';

  const handleCategorySelect = (category: string) => {
    const params = new URLSearchParams();
    if (category !== 'ALL') params.set('category', category);
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="flex flex-col">
      {/* Selected Category Title with Animation */}
      <motion.div className="px-4 py-8 border-b border-neutral-500 font-bold text-6xl">
        <motion.div
          key={selectedCategory}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {selectedCategory}
        </motion.div>
      </motion.div>

      {/* Category Buttons */}
      <div className="flex gap-4 p-4 border-b border-neutral-500 flex-wrap">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`font-bold text-xl relative ${
              selectedCategory === category ? 'text-white' : 'text-neutral-500'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {selectedCategory === category ? (
              <motion.div
                key={category}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="text-white"
              >
                {category}
              </motion.div>
            ) : (
              category
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
