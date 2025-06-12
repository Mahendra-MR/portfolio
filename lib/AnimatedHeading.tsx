'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeading({ text }: { text: string }) {
  return (
    <motion.h1
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.h1>
  );
}
