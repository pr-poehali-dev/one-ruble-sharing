
import React from 'react';

interface BrandLogoProps extends React.SVGProps<SVGSVGElement> {}

export const BrandLogo: React.FC<BrandLogoProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      {...props}
    >
      {/* Основная монета */}
      <circle cx="32" cy="32" r="28" fill="#3562FF" stroke="#212121" strokeWidth="2" />
      
      {/* Символ стрелки роста/буста внутри монеты */}
      <path 
        d="M20 32L32 20L44 32M32 20V44" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Маленькие монеты, показывающие рост/буст */}
      <circle cx="18" cy="46" r="8" fill="#F5F8FF" stroke="#212121" strokeWidth="2" />
      <circle cx="46" cy="46" r="8" fill="#F5F8FF" stroke="#212121" strokeWidth="2" />
    </svg>
  );
};
