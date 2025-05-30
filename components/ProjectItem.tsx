
import React from 'react';
import { ProjectEntry } from '../types';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectItemProps {
  entry: ProjectEntry;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ entry }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-0.5">
        <h3 className="text-md font-semibold text-gray-800">{entry.name}</h3>
        <p className="text-xs text-gray-500 mt-1 sm:mt-0">{entry.date}</p>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-4 text-sm mb-2 leading-relaxed">
        {entry.description.map((point, index) => (
          <li key={index} className="text-justify">{point}</li>
        ))}
      </ul>
      {entry.technologies && (
        <p className="text-xs text-gray-600 mb-1.5">
          <span className="font-medium text-gray-700">Technologies:</span> {entry.technologies.join(', ')}
        </p>
      )}
      {entry.link && (
        <a 
          href={entry.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center group transition-colors duration-150"
        >
          View Project <ExternalLinkIcon className="w-3 h-3 ml-1 text-blue-500 group-hover:text-blue-700 transition-colors duration-150" />
        </a>
      )}
    </div>
  );
};

export default ProjectItem;