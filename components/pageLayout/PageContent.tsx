import PurpleAccentButton from "@/components/accentButton/purpleAccentButton";
import { PageElement } from "./PageElement";
import Image from "next/image";
import YoutubeEmbed from "../embeds/YoutubeEmbed";
import FacebookEmbed from "../embeds/FacebookEmbed";
interface PageContentProps {
  pageLayout: PageElement[];
}

export default function PageContent(props: PageContentProps) {
  return (
    <div className="flex flex-col gap-4 bg-white">
      {props.pageLayout &&
        props.pageLayout.map((element: PageElement, index1) => {
          switch (element.type) {
            case "Header":
              return (
                <h1
                  key={element.type + index1}
                  id={element.type + index1}
                  className="text-h1 text-header-purple anchor"
                >
                  {element.content}
                </h1>
              );
            case "Subheader":
              return (
                <h2
                  key={element.type + index1}
                  id={element.type + index1}
                  className="text-h2 text-header-teal font-light anchor"
                >
                  {element.content}
                </h2>
              );
            case "TertiaryHeader":
              return (
                <h3
                  key={element.type + index1}
                  id={element.type + index1}
                  className="text-h3 text-header-purple font-semibold anchor"
                >
                  {element.content}
                </h3>
              );
            case "Paragraph":
              return (
                <div
                  key={element.type + index1}
                  id={element.type + index1}
                  className="text-body text-secondary-grey font-light"
                >
                  {element.content}
                </div>
              );
            case "Button":
              return (
                <PurpleAccentButton
                  key={element.type + index1}
                  className={`${element.alignment === "center" ? "m-auto" : "mr-auto"}`}
                  href={element.href}
                >
                  {element.text}
                </PurpleAccentButton>
              );
            case "List": {
              const listElements = element.items.map((item, index2) => {
                if (item && typeof item === "object" && "items" in item) {
                  // double list item -> return inner items
                  return item.items.map((innerItem, index3) => (
                    <li
                      className="list-[circle] py-0.5 ml-16"
                      key={index2 + index3}
                    >
                      {innerItem}
                    </li>
                  ));
                } else {
                  // String || number || ReactNode
                  return (
                    <li className="list-disc py-1 ml-8" key={index1 + index2}>
                      {item}
                    </li>
                  );
                }
              });

              return (
                <ul
                  key={element.type + index1}
                  id={element.type + index1}
                  className="list-disc text-body text-secondary-grey font-light"
                >
                  {listElements}
                </ul>
              );
            }

            case "Divider":
              return <hr key={element.type + index1} className="my-4"></hr>;
            case "MiscElement":
              return (
                <div key={element.type + index1} id={element.type + index1}>
                  {element.content}
                </div>
              );

            case "Image":
              return (
                <div
                  key={element.type + index1}
                  id={element.type + index1}
                  className={`relative ${element.className}`}
                >
                  <a href={element.href} target="_blank" rel="noreferrer">
                    <Image
                      fill
                      className="object-contain"
                      src={element.src}
                      alt={element.alt}
                    ></Image>
                  </a>
                </div>
              );

            case "YTEmbed":
              return (
                <YoutubeEmbed
                  key={element.url}
                  url={element.url}
                ></YoutubeEmbed>
              );

            case "FBEmbed":
              return (
                <FacebookEmbed
                  key={element.url}
                  url={element.url}
                  type="video"
                ></FacebookEmbed>
              );

            case "VerticalSplit":
              return (
                <div key={element.type + index1} className="flex gap-8">
                  <div className="flex flex-col w-1/2 relative">
                    <PageContent pageLayout={element.left}></PageContent>
                  </div>
                  <div className="flex flex-col w-1/2 relative">
                    <PageContent pageLayout={element.right}></PageContent>
                  </div>
                </div>
              );
          }
        })}
    </div>
  );
}
