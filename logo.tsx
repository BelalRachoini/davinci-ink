import React from 'react';
import logoImage from '@assets/da_vinci_logo_transparent.webp';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <img
        src={logoImage}
        alt="Da Vinci Ink Logo"
        className="w-full h-full object-contain transition-all duration-300"
        style={{
          filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
          imageRendering: 'auto'
        }}
      />
    </div>
  );
};

export default Logo;