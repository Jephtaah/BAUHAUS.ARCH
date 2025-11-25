export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'medium' | 'large';
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
}