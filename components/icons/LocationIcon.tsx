
import React from 'react';

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145l.002-.001L10 13.5l-1.293 1.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 13.5zm-1.01-15.462A6.5 6.5 0 0010 18.468a6.5 6.5 0 001.318-14.995V2.5a2.5 2.5 0 00-5 0v1.003zM10 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" clipRule="evenodd" />
    <path d="M10 2a5.5 5.5 0 00-5.5 5.5V10a5.5 5.5 0 0011 0V7.5A5.5 5.5 0 0010 2zM8.5 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
  </svg>
);
export default LocationIcon;
