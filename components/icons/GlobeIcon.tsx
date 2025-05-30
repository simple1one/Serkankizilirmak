
import React from 'react';

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm8-8a7.25 7.25 0 00-7.065 5.243.75.75 0 01-.44-1.355A8.75 8.75 0 0110 1.25c4.563 0 8.32 3.361 8.716 7.638a.75.75 0 01-1.448.228A7.252 7.252 0 0010 2z" clipRule="evenodd" />
  </svg>
);
export default GlobeIcon;
