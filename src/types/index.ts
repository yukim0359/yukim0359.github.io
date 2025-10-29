export interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

export interface Project {
  title: string;
  descriptions: string[];
  technologies?: string[];
  images?: {
    src: string;
    caption?: string;
  }[];
  links?: {
    title: string;
    url: string;
  }[];
}

export interface Skill {
  field: string;
  technologies: string[];
  descriptions: string[];
}
