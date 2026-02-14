import { Image, Slug } from "@sanity/types";

export type FamilyStory = {
  title: string;
  date: Date;
  text: string;
  heroImage: Image;
  slug: Slug;
  images: Image[];
};
