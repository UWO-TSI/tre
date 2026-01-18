import {
  emotionalSupportPage,
  financialSupportPage,
  hereForYouPage,
  qaPage,
  researchSupportPage,
  socialSupportPage,
  upcomingEventsPage,
} from "./forFamiliesPageLayout";

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

export type PageElement =
  | Header
  | Button
  | Paragraph
  | Subheader
  | List
  | DoubleList
  | TertiaryHeader;

const waysToGivePage: PageElement[] = [
  {
    type: "Header",
    content: <>Ways to Give</>,
  },
  {
    type: "Paragraph",
    content: (
      <>
        <strong>
          Your generosity offers hope to a family in their darkest time. The
          needs are urgent, immediate and ongoing.
        </strong>
      </>
    ),
  },
];

const PJDayPage: PageElement[] = [];
const goldPage: PageElement[] = [];
const hostAnEventPage: PageElement[] = [];
const marketplacePage: PageElement[] = [];
const merchandisePage: PageElement[] = [];
const volunteerPage: PageElement[] = [];
const ourSupportersPage: PageElement[] = [];

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
