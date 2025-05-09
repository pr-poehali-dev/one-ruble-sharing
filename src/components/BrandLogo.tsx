
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
      {/* Простая, запоминающаяся монета с символом "1" внутри */}
      <circle cx="32" cy="32" r="30" fill="#1877F2" stroke="#1877F2" strokeWidth="2" />
      
      {/* Цифра "1" и символ рубля ₽ */}
      <path 
        d="M26 20h6v24h-6v-24z" 
        fill="white" 
      />
      <path 
        d="M38 32h-12 M38 26h-6" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
    </svg>
  );
};
