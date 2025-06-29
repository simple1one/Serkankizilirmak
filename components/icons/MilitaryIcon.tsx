import React from 'react';

const MilitaryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M12 2L8.5 6h7L12 2z"/>
    <path d="M8 7v15h2v-8h4v8h2V7H8z"/>
    <path d="M10 10h4v2h-4v-2z"/>
    <path d="M10 13h4v2h-4v-2z"/>
    <circle cx="12" cy="17" r="1.5"/>
  </svg>
);

export default MilitaryIcon;
