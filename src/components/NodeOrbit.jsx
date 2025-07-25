'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function OrbitNode({ label, delay = 0, radius = 260, colorFrom = 'white/20', colorTo = 'white/5' }) {
  const path = useMotionValue(0);

  useEffect(() => {
    const controls = animate(path, 1, {
      repeat: Infinity,
      duration: 40,
      ease: 'linear',
      delay,
    });
    return controls.stop;
  }, [path, delay]);

  const x = useTransform(path, (p) => Math.cos(p * 2 * Math.PI) * radius);
  const y = useTransform(path, (p) => Math.sin(p * 2 * Math.PI) * radius);

  return (
    <motion.div
      style={{ x, y }}
      className={`absolute inset-0 m-auto h-32 w-32 rounded-full bg-gradient-to-br from-${colorFrom} to-${colorTo}`}
    >
      <span className="absolute inset-0 grid place-items-center text-sm tracking-wide text-white/80 select-none">
        {label}
      </span>
    </motion.div>
  );
}

export default function NodeOrbit() {
  return (
    <>
      <OrbitNode label="Cortex" delay={0} />
      <OrbitNode label="Quant" delay={10} radius={200} />
      <OrbitNode label="Aelf" delay={20} radius={150} />
      <OrbitNode label="Meeton" delay={30} radius={100} />
    </>
  );
}
