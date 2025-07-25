'use client';

import { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBg() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => setLoaded(true));
  }, []);

  const options = {
    fpsLimit: 60,
    background: { color: '#18181b' },
    fullScreen: { enable: false },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 80, duration: 0.4 } },
    },
    particles: {
      color: { value: '#ffffff' },
      move: { enable: true, speed: 0.6 },
      number: { value: 90, density: { enable: true, area: 800 } },
      opacity: { value: 0.15 },
      size: { value: { min: 1, max: 3 }, random: true },
      links: {
        enable: true,
        distance: 120,
        color: '#ffffff',
        opacity: 0.2,
        width: 1,
      },
    },
  };

  if (!loaded) return null;
  return <Particles id="tsparticles" options={options} className="absolute inset-0 -z-10" />;
}
