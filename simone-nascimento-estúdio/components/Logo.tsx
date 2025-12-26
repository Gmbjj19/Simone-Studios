
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const scale = size === 'sm' ? 0.4 : size === 'md' ? 0.7 : 1;
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: 100 * scale, height: 100 * scale }}>
      {/* Gold Frame Circle */}
      <div className="absolute inset-0 border-[1px] border-[#d4af37] rounded-full opacity-60"></div>
      <div className="absolute inset-[2px] border-[0.5px] border-[#d4af37] rounded-full opacity-30"></div>
      
      {/* Background initials SN */}
      <span className="absolute text-slate-200 font-serif font-bold select-none opacity-40" style={{ fontSize: 60 * scale }}>
        SN
      </span>
      
      {/* Foreground Script */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="font-script text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 whitespace-nowrap leading-tight" 
              style={{ fontSize: 24 * scale, filter: 'drop-shadow(0 0 2px rgba(255,0,242,0.3))' }}>
          Simone Nascimento
        </span>
        <span className="uppercase tracking-[0.3em] text-slate-400 font-medium" style={{ fontSize: 8 * scale }}>
          Estúdio
        </span>
      </div>
      
      {/* Little Rose at bottom (Simplified SVG icon) */}
      <div className="absolute bottom-[2%] text-[#ff8fb1] opacity-60" style={{ transform: 'scale(' + (0.6 * scale) + ')' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22C12 22 12 18 17 18C20 18 22 16 22 13C22 10 19 8 16 8C15 8 14 8.5 13 9C12.5 7 11 5 9 5C7 5 5 7 5 9C5 11 6 12 7 13C7 16 12 22 12 22Z" />
          <path d="M12 12C12 12 11 9 9 9" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
