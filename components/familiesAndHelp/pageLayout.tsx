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
  ourSupportersPage
} from "@/app/how-to-help/howToHelpPageLayout";

interface Header {
  type: "Header";
  content: React.ReactNode;
}
interface Subheader {
  type: "Subheader";
  content: React.ReactNode;
}
interface TertiaryHeader {
  type: "TertiaryHeader";
  content: React.ReactNode;
}
interface Paragraph {
  type: "Paragraph";
  content: React.ReactNode;
}
interface Button {
  type: "Button";
  text: string;
  href: string;
  alignment?: "left" | "center";
}
interface List {
  type: "List";
  items: string[];
}
interface DoubleList {
  type: "DoubleList";
  list: DoubleListElement;
}
interface DoubleListElement {
  type: "DoubleListElement";
  title: string;
  items: string[];
}
interface Divider {
  type: "Divider"
}

export type PageElement =
  | Header
  | Button
  | Paragraph
  | Subheader
  | List
  | DoubleList
  | TertiaryHeader
  | Divider;

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
