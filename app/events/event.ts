import { Slug } from "@sanity/types";
import { Image } from "sanity";

export type Event = {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  googleCalenderLink: string;
  ICSCalenderLink: string;
  description: string;
  buttonTitle: string;
  buttonLink: string;
  mainHeroImage: { image: Image; alt: string };
  images: { image: Image; alt: string }[];
  source: string;
  shortSummary: string;
  slug: Slug;
};
