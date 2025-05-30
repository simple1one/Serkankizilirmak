import React from 'react';

const MediumIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img 
    src="/components/icons/medium.svg" 
    alt="Medium Profile" 
    className={className || "w-6 h-6"} 
  />
);
export default MediumIcon;
