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
  type: "MiscElement";
  content: React.ReactNode;
}
export interface Image {
  type: "Image";
  src: string;
  alt: string;
  className?: string;
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
