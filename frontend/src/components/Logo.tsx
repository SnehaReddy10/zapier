import React from 'react';

function Logo({ className = '' }: { className?: string }) {
  return (
    <p className={`font-[800] text-xl ${className}`}>
      <span className="text-[#ff4f00]">_</span>zapier
    </p>
  );
}

export default Logo;
