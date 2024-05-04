export interface NavbarLink {
  name: string;
  target: string;
  offset: number;
}

export const navbarLinks: NavbarLink[] = [
  { name: 'home', target: 'home', offset: -100 },
  { name: 'about', target: 'about', offset: -80 },
  { name: 'classes', target: 'classes', offset: -80 },
  { name: 'team', target: 'team', offset: 0 },
  { name: 'prices', target: 'prices', offset: -40 },
  { name: 'testimonial', target: 'testimonial', offset: 0 },
  { name: 'blog', target: 'blog', offset: 0 },
  { name: 'contact', target: 'contact', offset: 0 },
];
