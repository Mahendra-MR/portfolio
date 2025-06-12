'use client';

import { motion } from 'framer-motion';

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionFade}
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-md"
    >
      {children}
    </motion.section>
  );
}
