
import React from 'react';
import { BootcampEntry } from '../types';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface BootcampItemProps {
  entry: BootcampEntry;
}

const BootcampItem: React.FC<BootcampItemProps> = ({ entry }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-0.5">
        <h3 className="text-md font-semibold text-gray-800">{entry.name}</h3>
        <p className="text-xs text-gray-500 mt-1 sm:mt-0">{entry.duration}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <p className="text-sm text-blue-600 font-medium">{entry.provider}</p>
        <p className="text-xs text-gray-500 mt-1 sm:mt-0">{entry.location}</p>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4 text-sm leading-relaxed">
        {entry.description.map((point, index) => (
          <li key={index} className="text-justify">{point}</li>
        ))}
      </ul>
      {entry.projectLink && entry.projectLink !== "#" && (
        <a 
          href={entry.projectLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-1.5 text-xs text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center group transition-colors duration-150"
        >
          Project Link <ExternalLinkIcon className="w-3 h-3 ml-1 text-blue-500 group-hover:text-blue-700 transition-colors duration-150" />
        </a>
      )}
    </div>
  );
};

export default BootcampItem;