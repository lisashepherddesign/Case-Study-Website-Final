import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

function PasswordInput() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const correctPassword = 'reflection'; // Change this to your desired password
  const targetUrl = 'https://docs.google.com/document/d/14DUAltLl4-YXJ6IqoUsLQBe0KRKCJEPOmnuGj3bWaEI/edit?usp=sharing'; // Change this to your desired URL

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget.querySelector('input');
    
    if (password === correctPassword) {
      window.open(targetUrl, '_blank');
      setPassword('');
      setError(false);
      target?.blur(); // Remove focus from input
    } else {
      setError(true);
      target?.blur(); // Remove focus from input
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        className={`w-[180px] px-4 py-2 bg-white/10 border ${
          error ? 'border-red-400' : 'border-indigo-300/30'
        } rounded text-indigo-200 placeholder-indigo-300/50 focus:outline-none focus:border-indigo-400 transition-colors text-center`}
        style={{
          fontFamily: 'monospace',
          letterSpacing: '0.1em'
        }}
      />
      {error && (
        <p className="text-red-400 text-sm mt-2 text-center" style={{ fontFamily: 'monospace' }}>
          Incorrect password
        </p>
      )}
    </form>
  );
}

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Add scroll listener for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-transparent" style={{ overflow: 'visible' }}>
      {/* Pixel animation moved to App.tsx to flow behind all sections */}
      
      <div className="container mx-auto px-6 py-10 relative z-10 bg-[rgba(255,255,255,0)]">
        <div 
          className="text-center"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 1 - scrollY / 500,
            overflow: 'visible'
          }}
        >
          {/* Main title with glitch effect */}
          <div className="relative inline-block" style={{ padding: '40px', overflow: 'visible' }}>
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl relative"
              style={{
                fontFamily: 'monospace',
                imageRendering: 'pixelated',
                letterSpacing: '0.1em',
                filter: 'contrast(1.2)',
                WebkitFontSmoothing: 'none',
                fontSmooth: 'never',
                textRendering: 'geometricPrecision',
                padding: '30px'
              }}
            >
              <span className="inline-block pixelated-text text-gray-700" style={{ fontSize: '0.6em', WebkitTextStroke: '1px rgba(100, 116, 139, 0.3)', textStroke: '1px rgba(100, 116, 139, 0.3)' }}>W</span>
              <span className="inline-block pixelated-text text-gray-700" style={{ fontSize: '0.6em', WebkitTextStroke: '1px rgba(100, 116, 139, 0.3)', textStroke: '1px rgba(100, 116, 139, 0.3)' }}>h</span>
              <span className="inline-block pixelated-text text-gray-700" style={{ fontSize: '0.6em', WebkitTextStroke: '1px rgba(100, 116, 139, 0.3)', textStroke: '1px rgba(100, 116, 139, 0.3)' }}>a</span>
              <span className="inline-block pixelated-text text-gray-700" style={{ fontSize: '0.6em', WebkitTextStroke: '1px rgba(100, 116, 139, 0.3)', textStroke: '1px rgba(100, 116, 139, 0.3)' }}>t</span>
              <span className="inline-block mx-2"></span>
              <span className="inline-block pixelated-text text-gray-700" style={{ fontSize: '0.6em', WebkitTextStroke: '1px rgba(100, 116, 139, 0.3)', textStroke: '1px rgba(100, 116, 139, 0.3)' }}>i</span>
              <span className="inline-block pixelated-text text-gray-700" style={{ fontSize: '0.6em', WebkitTextStroke: '1px rgba(100, 116, 139, 0.3)', textStroke: '1px rgba(100, 116, 139, 0.3)' }}>s</span>
              <br />
              <span 
                className="inline-block text-indigo-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >V</span>
              <span 
                className="inline-block text-indigo-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >i</span>
              <span 
                className="inline-block text-indigo-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >b</span>
              <span 
                className="inline-block text-indigo-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >e</span>
              <span className="inline-block mx-4"></span>
              <span 
                className="inline-block text-purple-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >C</span>
              <span 
                className="inline-block text-purple-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >o</span>
              <span 
                className="inline-block text-purple-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >d</span>
              <span 
                className="inline-block text-purple-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >i</span>
              <span 
                className="inline-block text-purple-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >n</span>
              <span 
                className="inline-block text-purple-400 extra-pixelated" 
                style={{ 
                  fontSize: '1.2em',
                  fontFamily: 'Handjet, monospace',
                  fontWeight: 'bold',
                  textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)'
                }}
              >g</span>
              <span className="inline-block text-pink-400 pixelated-text" style={{ textShadow: '0 0 15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.4)' }}>?</span>
            </h1>
          </div>
          
          {/* Byline */}
          <p 
            className="text-indigo-300 tracking-wider leading-relaxed"
            style={{
              fontFamily: 'monospace',
              letterSpacing: '0.2em',
              marginTop: '0px'
            }}
          >
            BY LISA SHEPHERD
          </p>
          
          {/* Password Input */}
          <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
            <PasswordInput />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        
        .pixelated-text {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: grayscale;
          font-smooth: never;
          transform: scale(1);
          filter: url(#pixelate);
        }
        
        .extra-pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          -webkit-font-smoothing: none;
          -moz-osx-font-smoothing: grayscale;
          font-smooth: never;
          transform: scale(1);
          filter: url(#pixelate);
        }
      `}</style>
      
      {/* SVG filter for pixelation */}
      <svg className="absolute" width="0" height="0">
        <defs>
          <filter id="pixelate">
            <feFlood x="0" y="0" width="1" height="1" />
            <feComposite width="2" height="2" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" radius="1" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}