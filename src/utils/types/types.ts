// herot types

export type Link = {
  href?: string;
  text?: string;
};

export type THero = {
  title?: string;
  description?: string;
  links?: Link[]; // Optional array of Link objects
  link?: Link; // Optional single Link object
  className?: string;
};

// product types

export type TServices = {
  id?: number;
  title?: string;
  subtitle?: string;
  description: string;
  thumbnail: { src: string; alt: string };
  thumbnails: { id: number; src: string; alt: string }[];
};
