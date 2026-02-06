/**
 * TypeScript types matching the Sanity event schema
 * These types can be used in your frontend when fetching data from Sanity
 */

export interface SanityEvent {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  date: string;
  endDate?: string;
  location?: string;
  description: string;
  mainImage: SanityImage;
  imageGallery?: SanityImageWithAlt[];
  buttonTitle?: string;
  buttonLink?: string;
  googleCalendarLink?: string;
  icsCalendarLink?: string;
  source?: string;
  featured: boolean;
}

export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
  _type: "image";
}

export interface SanityImageWithAlt extends SanityImage {
  alt?: string;
}

export interface SanityGuide {
    _id: string;
    title: string;
    category?: "events" | "images" | "general";
    content: string; // Portable Text blocks
}

export interface AdjacentEvents {
  previous: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    date: string;
  } | null;
  next: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    date: string;
  } | null;
}
