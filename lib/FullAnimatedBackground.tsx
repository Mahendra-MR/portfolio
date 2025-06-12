'use client';

import { motion } from 'framer-motion';

export default function FullAnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl" />

      {/* Floating blobs */}
      <motion.div
        initial={{ x: '-50%', y: '-50%', scale: 0.8, opacity: 0.4 }}
        animate={{ x: '0%', y: '0%', scale: 1.1, opacity: 0.6 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className="absolute w-[600px] h-[600px] bg-pink-400 opacity-20 rounded-full filter blur-3xl top-0 left-0"
      />
      <motion.div
        initial={{ x: '50%', y: '50%', scale: 1.2, opacity: 0.3 }}
        animate={{ x: '0%', y: '0%', scale: 1, opacity: 0.5 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        className="absolute w-[500px] h-[500px] bg-blue-400 opacity-20 rounded-full filter blur-2xl bottom-0 right-0"
      />
    </div>
  );
}
