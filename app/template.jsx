'use client';
import { motion, useReducedMotion } from 'framer-motion';
export default function Template({ children }) {
  const reduce = useReducedMotion();
  if (reduce) return children;
  return <motion.div initial={{ y: 10 }} animate={{ y: 0 }} transition={{ duration: 0.35, ease: 'easeOut' }}>{children}</motion.div>;
}
