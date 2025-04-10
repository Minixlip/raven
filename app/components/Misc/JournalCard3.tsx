'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

export default function JournalCard3({ journalCardInfo }: any) {
  const [previewHover, setPreviewHover] = useState(false);
  const router = useRouter();

  return (
    <div
      className="flex-1 border border-neutral-500 flex flex-col cursor-pointer"
      onClick={() => router.push(`/journal?journal=${journalCardInfo.id}`)}
      onMouseEnter={() => setPreviewHover(true)}
      onMouseLeave={() => setPreviewHover(false)}
    >
      <div className="flex-1 border-b border-neutral-500 overflow-hidden">
        <motion.div
          className="h-full w-full min-h-[50vh]"
          style={{
            backgroundImage: `url(${journalCardInfo.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          animate={{ scale: previewHover ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-5 py-3 mx-2 px-3">
        <div className="flex flex-col text-wrap gap-4">
          <span className="text-neutral-500 font-semibold">
            {journalCardInfo.date}
          </span>
          <span className="font-bold text-white text-4xl lg:text-7xl">
            {journalCardInfo.title}
          </span>
          <span className="font-bold text-neutral-500 text-xl">
            {journalCardInfo.description}
          </span>
        </div>
        <div className="flex items-center font-bold text-xl gap-2 mt-4">
          <motion.span
            animate={{ textDecoration: previewHover ? 'underline' : 'none' }}
            transition={{ duration: 0.3 }}
          >
            VIEW ALL
          </motion.span>
          <motion.div
            animate={{ y: previewHover ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <BsArrowUpRight />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
