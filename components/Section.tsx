
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section 
      id={id} 
      className="bg-white shadow-lg p-6 md:p-8 rounded-lg scroll-mt-16 md:scroll-mt-20"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200">{title}</h2>
      {children}
    </section>
  );
};

export default Section;