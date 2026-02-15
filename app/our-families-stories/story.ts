import { Image, Slug } from "@sanity/types";

export type FamilyStory = {
  title: string;
  date: Date;
  text: string;
  shortSummary: string;
  heroImage: { image: Image; alt: string };
  slug: Slug;
  images: { image: Image; alt: string }[];
};
