'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

export default function JournalCard(props: any) {
  const [previewHover, setPreviewHover] = useState(false);
  return (
    <div
      className="flex-1 border border-neutral-500 flex flex-col cursor-pointer"
      onClick={() => (location.href = `/journal`)}
      onMouseEnter={() => setPreviewHover(true)}
      onMouseLeave={() => setPreviewHover(false)}
    >
      <div className="flex-1 border-b border-neutral-500 overflow-hidden">
        <motion.div
          className="h-full w-full min-h-[20vh]"
          style={{
            backgroundImage: `url(${props.journalCardInfo.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          animate={{ scale: previewHover ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>
      <div className=" flex flex-col justify-between gap-5 py-3 mx-2">
        <div className="flex flex-col">
          <span className="text-xs text-neutral-500 font-semibold">
            {props.journalCardInfo.date}
          </span>
          <span className="font-bold text-white text-4xl">
            {props.journalCardInfo.title}
          </span>
        </div>
        <div className="flex items-center font-bold text-xl gap-2 mt-4">
          <motion.span
            animate={{
              textDecoration: previewHover ? 'underline' : 'none',
            }}
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
