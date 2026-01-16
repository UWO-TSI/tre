interface Header {
  type: "Header";
  content: React.ReactNode;
}
interface Button {
  type: "Button";
  text: string;
  href: string;
}
interface Paragraph {
  type: "Paragraph";
  content: React.ReactNode;
}
interface Subheader {
  type: "Subheader";
  title: string;
}
interface List {
  type: "List";
  elements: string[];
}
interface DoubleListElement {
  type: "DoubleListElement";
  title: string;
  element: string[];
}
interface DoubleList {
  type: "DoubleList";
  element: DoubleListElement;
}
export interface TertiaryHeader {
  type: "TertiaryHeader";
  title: string;
}

export type PageElement =
  | Header
  | Button
  | Paragraph
  | Subheader
  | List
  | DoubleList
  | TertiaryHeader;

const pagelayout: PageElement[] = [];
