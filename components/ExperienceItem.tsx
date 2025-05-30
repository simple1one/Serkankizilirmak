
import React from 'react';
import { ExperienceEntry } from '../types';

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ entry }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-0.5">
        <h3 className="text-md font-semibold text-gray-800">{entry.role}</h3>
        <p className="text-xs text-gray-500 mt-1 sm:mt-0">{entry.duration}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <p className="text-sm text-blue-600 font-medium">{entry.company}</p>
        <p className="text-xs text-gray-500 mt-1 sm:mt-0">{entry.location}</p>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4 text-sm leading-relaxed">
        {entry.description.map((point, index) => (
          <li key={index} className="text-justify">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;