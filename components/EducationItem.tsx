
import React from 'react';
import { EducationEntry } from '../types';

interface EducationItemProps {
  entry: EducationEntry;
}

const EducationItem: React.FC<EducationItemProps> = ({ entry }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-0.5">
        <h3 className="text-md font-semibold text-gray-800">{entry.degree}</h3>
        <p className="text-xs text-gray-500 mt-1 sm:mt-0">{entry.duration}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <p className="text-sm text-blue-600 font-medium">{entry.institution}</p>
        <p className="text-xs text-gray-500 mt-1 sm:mt-0">{entry.location}</p>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4 text-sm leading-relaxed">
        {entry.details.map((point, index) => (
          <li key={index} className="text-justify">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationItem;