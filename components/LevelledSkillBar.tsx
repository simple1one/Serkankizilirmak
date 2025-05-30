
import React from 'react';
import { SkillEntry, SkillProficiency } from '../types';

interface LevelledSkillBarProps {
  skill: SkillEntry;
}

const proficiencyMapping: Record<SkillProficiency, { percentage: string, text: string }> = {
  Beginner: { percentage: '25%', text: 'Beginner' },
  Intermediate: { percentage: '50%', text: 'Intermediate' },
  Advanced: { percentage: '75%', text: 'Advanced' },
  Expert: { percentage: '100%', text: 'Expert' },
};

const LevelledSkillBar: React.FC<LevelledSkillBarProps> = ({ skill }) => {
  if (!skill.proficiency) {
    return null; 
  }
  const { percentage, text } = proficiencyMapping[skill.proficiency];

  return (
    <div className="mb-2.5">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-xs font-medium text-blue-600">{text}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: percentage }}
          role="progressbar"
          aria-valuenow={parseInt(percentage)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} proficiency: ${text}`}
        ></div>
      </div>
    </div>
  );
};

export default LevelledSkillBar;