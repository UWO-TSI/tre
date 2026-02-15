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
  mainHeroImage: Image;
  images: Image[];
  source: string;
  shortSummary: string;
  slug: Slug;
};
