import { Hero } from './components/Hero';
import { Approach } from './components/Approach';
import { Disclaimer } from './components/Disclaimer';
import { Results } from './components/Results';
import { Examples } from './components/Examples';
import { Frustration } from './components/Frustration';
import { TLDR } from './components/TLDR';
import { Footer } from './components/Footer';
import { SectionSeparator } from './components/SectionSeparator';
import { useEffect, useState } from 'react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [pixels, setPixels] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random pixel positions for background animation
    const newPixels = Array.from({ length: 80 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100, // Keep within viewport
      delay: Math.random() * 3
    }));
    setPixels(newPixels);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-white" style={{ overflow: 'visible' }}>
      {/* Animated pixelated background - flows behind all sections */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0
        }}
      >
        {pixels.map((pixel, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-indigo-500 opacity-20 animate-pulse"
            style={{
              left: `${pixel.x}%`,
              top: `${pixel.y}%`,
              animationDelay: `${pixel.delay}s`,
              imageRendering: 'pixelated'
            }}
          />
        ))}
      </div>

      {/* All content sits on top */}
      <div className="relative z-10" style={{ overflow: 'visible' }}>
        <Hero />
        <SectionSeparator color="indigo" />
        <Approach />
        <SectionSeparator color="pink" />
        <Disclaimer />
        <SectionSeparator color="teal" />
        <Results />
        <SectionSeparator color="violet" />
        <Examples />
        <SectionSeparator color="fuchsia" />
        <Frustration />
        <SectionSeparator color="cyan" />
        <TLDR />
        <SectionSeparator color="gray" />
        <Footer />
      </div>
    </div>
  );
}