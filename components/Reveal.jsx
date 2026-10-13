'use client';
import { motion, useReducedMotion } from 'framer-motion';
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduce = useReducedMotion();
  const M = motion[as] || motion.div;
  if (reduce) { const T = as; return <T className={className}>{children}</T>; }
  return (
    <M className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 120, damping: 18, delay }}>
      {children}
    </M>
  );
}
