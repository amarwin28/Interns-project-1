export interface TeamMember {
  id: string;
  name: string;
  department: string;
  year: string;
  role: string;
  description: string;
  skills: string[];
  avatarGrad: string;
  avatarIcon: string;
  initials: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend & API' | 'Database' | 'Tools & Version Control';
  iconName: string;
  badgeColor: string;
  description: string;
}
