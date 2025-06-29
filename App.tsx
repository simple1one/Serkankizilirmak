
import React from 'react';
import { resumeData } from './data/resumeData';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import ProjectItem from './components/ProjectItem';
import BootcampItem from './components/BootcampItem';
import EducationItem from './components/EducationItem';
import SkillBadge from './components/SkillBadge';
import LevelledSkillBar from './components/LevelledSkillBar'; // Import new component
import { Language, SkillCategory, SkillEntry } from './types';

console.log('App component loading...');

const sections = [
  { id: "summary", title: "Summary" },
  { id: "experience", title: "Professional Experience" },
  { id: "internships", title: "Internships" },
  { id: "projects", title: "Projects" },
  { id: "bootcamps", title: "Bootcamps" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "certificates", title: "Certificates" },
  { id: "languages", title: "Languages" },
];

const App: React.FC = () => {
  console.log('App component rendering...');
  
  if (!resumeData) {
    return <div style={{padding: '20px'}}>Error: Resume data not loaded!</div>;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar contactInfo={resumeData.contactInfo} sections={sections} />

      <div className="flex-grow md:ml-72 lg:ml-80 xl:ml-96 flex flex-col">
        <main className="flex-grow p-6 md:p-8 lg:p-10 space-y-10 md:space-y-12 overflow-y-auto w-full max-w-7xl mx-auto">
          <Section id="summary" title="Summary">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">{resumeData.summary}</p>
          </Section>

          <Section id="experience" title="Professional Experience">
            {resumeData.professionalExperience.map((exp, index) => (
              <ExperienceItem key={index} entry={exp} />
            ))}
          </Section>

          <Section id="internships" title="Internships">
            {resumeData.internships.map((internship, index) => (
              <ExperienceItem key={index} entry={internship} />
            ))}
          </Section>

          <Section id="projects" title="Projects">
            {resumeData.projects.map((project, index) => (
              <ProjectItem key={index} entry={project} />
            ))}
          </Section>
          
          <Section id="bootcamps" title="Bootcamps">
            {resumeData.bootcamps.map((bootcamp, index) => (
              <BootcampItem key={index} entry={bootcamp} />
            ))}
          </Section>

          <Section id="education" title="Education">
            {resumeData.education.map((edu, index) => (
              <EducationItem key={index} entry={edu} />
            ))}
          </Section>

          <Section id="skills" title="Skills">
            {resumeData.skills.map((category: SkillCategory, index: number) => (
              <div key={index} className="mb-8 last:mb-0">
                <h4 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">{category.name}</h4>
                {category.type === 'levelled' ? (
                  <div className="space-y-4">
                    {category.skills.map((skill: SkillEntry, sIndex: number) => (
                      <LevelledSkillBar key={sIndex} skill={skill} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap -m-1">
                    {category.skills.map((skill: SkillEntry, sIndex: number) => (
                      <div key={sIndex} className="p-1">
                        <SkillBadge skill={skill.name} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Section>

          <Section id="certificates" title="Certificates">
            <ul className="list-disc list-inside text-gray-700 space-y-1.5 pl-4 text-sm md:text-base">
              {resumeData.certificates.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </Section>

          <Section id="languages" title="Languages">
            <ul className="list-none space-y-1.5 text-sm md:text-base">
              {resumeData.languages.map((lang: Language, index: number) => (
                <li key={index} className="text-gray-700">
                  <span className="font-medium text-gray-800">{lang.name}:</span> {lang.proficiency}
                </li>
              ))}
            </ul>
          </Section>
        </main>
        
        <footer className="text-center py-6 px-6 text-xs md:text-sm text-gray-600 bg-gray-50 border-t border-gray-200 mt-auto">
          <p>&copy; 2025 {resumeData.contactInfo.name}. All rights reserved.</p>
          <p className="mt-1">Crafted with React & Tailwind CSS (with VibeCoding).</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
