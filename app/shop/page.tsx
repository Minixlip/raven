'use client';
import AllItemDisplay from '../components/shop/AllItemDisplay';
import CategoryNavbar from '../components/shop/CategoryNavbar';
import { motion } from 'framer-motion';

export default function Shop() {
  return (
    <div>
      <CategoryNavbar />
      <motion.div className="mt-2">
        <AllItemDisplay />
      </motion.div>
    </div>
  );
}
