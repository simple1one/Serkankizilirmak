
export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  birthDate: string;
  phone: string;
  email: string;
  linkedin: string;
  github?: string; // Optional since we're removing it
  medium: string;
  portfolio: string; 
  militaryStatus: string; // New field
}

export interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface ProjectEntry {
  name: string;
  date: string;
  description: string[];
  technologies?: string[];
  link?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  details: string[];
}

export interface BootcampEntry {
  name: string;
  provider: string;
  duration: string;
  location: string;
  description: string[];
  projectLink?: string;
}

export type SkillProficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface SkillEntry {
  name: string;
  proficiency?: SkillProficiency; // Optional for list items, required for levelled
}

export interface SkillCategory {
  name: string;
  type: 'levelled' | 'list';
  skills: SkillEntry[];
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface ResumeData {
  contactInfo: ContactInfo;
  summary: string;
  professionalExperience: ExperienceEntry[];
  internships: ExperienceEntry[];
  projects: ProjectEntry[];
  bootcamps: BootcampEntry[];
  education: EducationEntry[];
  skills: SkillCategory[];
  certificates: string[];
  languages: Language[];
}
