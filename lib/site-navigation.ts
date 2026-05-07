export type NavItem = {
  href: string;
  label: string;
};

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export const footerNavigation = {
  explore: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ],
  connect: [
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
    {
      href: "https://github.com/AmirE",
      label: "GitHub",
      external: true,
    },
  ],
};
