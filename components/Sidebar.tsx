
import React from 'react';
import { ContactInfo } from '../types';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import MediumIcon from './icons/MediumIcon';
import GlobeIcon from './icons/GlobeIcon';
import LocationIcon from './icons/LocationIcon'; // Added
import CalendarIcon from './icons/CalendarIcon'; // Added

interface SidebarProps {
  contactInfo: ContactInfo;
  sections: Array<{ id: string; title: string }>;
}

const Sidebar: React.FC<SidebarProps> = ({ contactInfo, sections }) => {
  return (
    <aside className="w-full md:w-72 lg:w-80 xl:w-96 bg-white text-gray-700 p-6 md:p-8 md:fixed md:top-0 md:left-0 md:h-screen md:overflow-y-auto md:border-r md:border-gray-200 shadow-lg md:shadow-none z-20 flex flex-col">
      <div className="text-left mb-10 md:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">{contactInfo.name}</h1>
        <p className="text-lg lg:text-xl text-blue-600 font-medium mt-1">{contactInfo.title}</p>
      </div>

      <nav className="mb-10">
        <ul className="space-y-1.5">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-100 focus:text-blue-600"
                aria-label={`Go to ${section.title} section`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-5 mt-auto"> {/* mt-auto pushes this block to bottom if sidebar has extra space */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center text-gray-700">
            <LocationIcon className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
            <span>{contactInfo.location}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <CalendarIcon className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
            <span>{contactInfo.birthDate}</span>
          </div>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center group text-gray-700 hover:text-blue-600 transition-colors duration-150">
            <EmailIcon className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
            <span>{contactInfo.email}</span>
          </a>
          <a href={`tel:${contactInfo.phone}`} className="flex items-center group text-gray-700 hover:text-blue-600 transition-colors duration-150">
            <PhoneIcon className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
            <span>{contactInfo.phone}</span>
          </a>
        </div>
        
        <div className="flex space-x-4 pt-2">
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-500 hover:text-blue-600 transition-colors duration-150">
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-500 hover:text-blue-600 transition-colors duration-150">
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a href={contactInfo.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium Profile" className="text-gray-500 hover:text-blue-600 transition-colors duration-150">
            <MediumIcon className="w-5 h-5" />
          </a>
          {contactInfo.portfolio && (
             <a href={contactInfo.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio Website" className="text-gray-500 hover:text-blue-600 transition-colors duration-150">
               <GlobeIcon className="w-5 h-5" />
             </a>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
