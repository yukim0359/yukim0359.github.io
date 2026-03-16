export interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

export interface Work {
  title: string;
  descriptions: string[];
  descriptionsEn?: string[];
  technologies?: string[];
  images?: {
    src: string;
    caption?: string;
    captionEn?: string;
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
  descriptionsEn?: string[];
}
