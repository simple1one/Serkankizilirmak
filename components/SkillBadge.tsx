
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md hover:bg-gray-200 transition-colors duration-150">
      {skill}
    </span>
  );
};

export default SkillBadge;