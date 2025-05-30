
import React from 'react';

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className || "w-5 h-5"}>
    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.001c.063.263.01.54-.152.763L4.7 9.433a.5.5 0 00-.11.678l3.456 6.483a.5.5 0 00.678-.11l2.406-2.888a1.33 1.33 0 01.763-.152l3.001.716A1.5 1.5 0 0118 15.352V16.5A1.5 1.5 0 0116.5 18h-13A1.5 1.5 0 012 16.5v-13z" clipRule="evenodd" />
  </svg>
);
export default PhoneIcon;
