import {
  emotionalSupportPage,
  financialSupportPage,
  hereForYouPage,
  qaPage,
  researchSupportPage,
  socialSupportPage,
  upcomingEventsPage,
} from "@/app/for-families/forFamiliesPageLayout";

import {
  waysToGivePage,
  PJDayPage,
  goldPage,
  hostAnEventPage,
  marketplacePage,
  merchandisePage,
  volunteerPage,
  ourSupportersPage,
} from "@/app/how-to-help/howToHelpPageLayout";

export interface Header {
  type: "Header";
  content: React.ReactNode;
}
export interface Subheader {
  type: "Subheader";
  content: React.ReactNode;
}
export interface TertiaryHeader {
  type: "TertiaryHeader";
  content: React.ReactNode;
}
export interface Paragraph {
  type: "Paragraph";
  content: React.ReactNode;
}
export interface Button {
  type: "Button";
  text: string;
  href: string;
  alignment?: "left" | "center";
}
export interface List {
  type: "List";
  items: string[];
}
export interface DoubleList {
  type: "DoubleList";
  list: DoubleListElement;
}
export interface DoubleListElement {
  type: "DoubleListElement";
  title: string;
  items: string[];
}
export interface Divider {
  type: "Divider";
}
export interface MiscElement {
  type: "MiscElement",
  content: React.ReactNode
}
export interface Image {
  type: "Image",
  src: string,
  alt: string
  className?: string
}

export type PageElement =
  | Header
  | Button
  | Paragraph
  | Subheader
  | List
  | DoubleList
  | TertiaryHeader
  | Divider
  | MiscElement
  | Image;

export const pageLayouts: Record<string, PageElement[]> = {
  // FOR FAMILIES PAGES
  "Here for You": hereForYouPage,
  "Financial Support": financialSupportPage,
  "Emotional Support": emotionalSupportPage,
  "Social Support": socialSupportPage,
  "Research Support": researchSupportPage,
  "Upcoming Family Events": upcomingEventsPage,
  "Q&A": qaPage,

  // HOW TO HELP PAGES
  "Ways to Give": waysToGivePage,
  "PJ Day": PJDayPage,
  Gold: goldPage,
  "Host an Event": hostAnEventPage,
  Marketplace: marketplacePage,
  Merchandise: merchandisePage,
  Volunteer: volunteerPage,
  "Our Supporters": ourSupportersPage,
};
