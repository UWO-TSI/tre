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

export const pageLayout: PageElement[] = [

];


export const hereForYouPage: PageElement[] = [
  {
    type: "Header",
    content: (
      <>
        Here For <strong>You</strong>
      </>
    )
  }, 
  {
    type: "Paragraph",
    content: (
      <>
      Hearing the words “your child has cancer” is life-changing. Childcan is here to help you rebalance and establish a new normal. We’re here to ask you what you need, what supports would make a difference for you, right now. And then to answer with programs that provide assistance in even more ways than you might expect. Our services have all been developed to respond to the families we’ve supported for the past 50 years, to address the needs they have identified and experienced. And to remind you that you are not alone.
      </>
    )
  }
];