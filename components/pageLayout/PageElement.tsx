import React from "react";

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
  type: "Divider";
}
interface MiscElement {
  type: "MiscElement";
  content: React.ReactNode;
}
interface VerticalSplit {
  type: "VerticalSplit";
  left: PageElement[];
  right: PageElement[];
}
interface Image {
  type: "Image";
  src: string;
  alt: string;
  className?: string;
  href?: string;
}
interface YTEmbed {
  type: "YTEmbed";
  url: string;
}
interface FBEmbed {
  type: "FBEmbed";
  url: string;
  width: number;
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
  | VerticalSplit
  | Image
  | YTEmbed
  | FBEmbed;
